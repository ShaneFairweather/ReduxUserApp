import axios from 'axios';
import { browserHistory } from 'react-router';
import {
    AUTH_USER,
    AUTH_ERROR
} from './actions_types';

const ROOT_URL = 'http://localhost:3030';

export function signinUser({ email, username, password }) {
    return function(dispatch) {
    //submit email/pw to server
    axios.post(`${ROOT_URL}/signin`, { email, username, password })
        .then(response => {
            //update state to reflect authentication
            dispatch({ type: AUTH_USER });
            //save jwt token
            localStorage.setItem('token', response.data.token);
            //redirect route
            browserHistory.push('/');
        })
        .catch(() => {
            //else show error to user
            dispatch(authError('Incorrect Login Info'));
        })

    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}
