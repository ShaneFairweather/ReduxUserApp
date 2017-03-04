import { GET_POSTS, ADD_POST } from '../actions/actions_types';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
    console.log(action.payload)
    switch(action.type) {
        case GET_POSTS:
            return { ...state, all: action.payload.data };
        case ADD_POST:
            return { ...state, all: action.payload.data };
        default:
            return state;
    }
}












// export default function() {
//     return [
//         {
//             author: 'Admin',
//             content: 'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est lab'
//         },
//         {
//             author: 'Admin',
//             content: 'm veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui o'
//         }
//     ]
// }