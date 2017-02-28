export default function(state = null, action) {
    switch(action.type) {
        case 'GET_USERS':
            return action.payload;
    }
    return state;
}