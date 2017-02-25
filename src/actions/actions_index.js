import axios from 'axios';
import { browserHistory } from 'react-router';
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR
} from './actions_types';

const ROOT_URL = 'http://localhost:3030';

export function signinUser({ email, password }) {
    return function(dispatch) {
        //submit email/pw to server
        axios.post(`${ROOT_URL}/signin`, { email, password })
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
                dispatch(authError('Invalid email or password'));
            })

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