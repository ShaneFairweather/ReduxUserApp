import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';
import signinReducer from './reducer_signIn';
import UsersReducer from './reducer_users';
import {ACCOUNT_SAVE_SUCCESS} from '../actions/actions_types';

const rootReducer = combineReducers({
    form: formReducer.plugin({
        postForm: (state, action) => { // <------ 'account' is name of form given to reduxForm()
            switch(action.type) {
                case ACCOUNT_SAVE_SUCCESS:
                    return undefined;       // <--- blow away form data
                default:
                    return state;
            }
        }
    }),
    posts: PostsReducer,
    signin: signinReducer,
    users: UsersReducer
});

export default rootReducer;