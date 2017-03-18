import axios from 'axios';
import { browserHistory } from 'react-router';
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    GET_USERS,
    GET_POSTS,
    ADD_POST,
    UPDATE_POSTS,
    CHECK_AUTH
} from './actions_types';

const ROOT_URL = 'https://interreact.herokuapp.com';
// https://interreact.herokuapp.com
export function signinUser({ email, password }) {
    return function(dispatch) {
        //submit email/pw to server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                //save jwt token
                localStorage.setItem('token', response.data.token);
                //update state to reflect authentication
                dispatch({ type: AUTH_USER });
                //redirect route
                browserHistory.push('/');
            })
            .catch(() => {
                //else show error to user
                dispatch(authError('Invalid email or password'));
            })

    }
}

export function signupUser({email, username, password}) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup`, {email, username, password})
            .then(response => {
                localStorage.setItem('token', response.data.token);
                dispatch({ type: AUTH_USER });
                browserHistory.push('/');
            })
            .catch(response => dispatch(authError('An account with that email already exists')))
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    localStorage.removeItem('token');
    return function(dispatch) {
        dispatch({ type: UNAUTH_USER });
        browserHistory.push('/');
    }
}


export function checkAuth({email, password}) {
    return (dispatch) => {
        return dispatch(
            signinUser({email, password})
        ).then(() => {
            return dispatch(
                console.log("checked auth")
            )
        })
    }
}



export function getUsers() {
    const request = axios.get(`${ROOT_URL}/users`);
    // console.log(request);
    return {
        type: GET_USERS,
        payload: request
    }
}

export function getPosts() {
    const request = axios.get(`${ROOT_URL}/posts`);
    return {
        type: GET_POSTS,
        payload: request
    }
}

export function addPost({author, avatar, content}) {
    const request = axios.post(`${ROOT_URL}/addpost`, {author, avatar, content});
    // console.log(request);
    return {
        type: ADD_POST,
        payload: request
    }
}


export function updateUsers({email, username, password}) {
    return (dispatch) => {
        return dispatch(
            signupUser({email, username, password})
        ).then(() => {
            return dispatch(
                getUsers()
            )
        })
    }
}


export function updatePosts({author, avatar, content}) {
    return (dispatch) => {
        return dispatch(
            addPost({author, avatar, content})
        ).then(() => {
            return dispatch(
                getPosts()
            )
        })
    }
}