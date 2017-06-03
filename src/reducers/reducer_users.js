import { GET_USERS } from '../actions/actions_types';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_USERS:
            return {all: action.payload.data};
        default:
            return state;
    }
}

