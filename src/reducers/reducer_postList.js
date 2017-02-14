export default function(state = null, action) {
    switch(action.type) {
        case 'ADD_POST':
            return action.payload;
    }
    return state;
}