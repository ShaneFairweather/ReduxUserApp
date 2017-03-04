import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    GET_USERS
} from '../actions/actions_types';

export default function(state = [], action) {
    switch(action.type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true };
        case UNAUTH_USER:
            return { ...state, authenticated: false };
        case AUTH_ERROR:
            return {...state, error: action.payload };
        case GET_USERS:
            return { ...state, all: action.payload.data };
    }

    return state;
}