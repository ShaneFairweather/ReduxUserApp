import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
// import PostListReducer from './reducer_postList';
import { reducer as formReducer } from 'redux-form';
import signinReducer from './reducer_signIn';
import UsersReducer from './reducer_users';

const rootReducer = combineReducers({
    form: formReducer,
    posts: PostsReducer,
    // postList: PostListReducer,
    signin: signinReducer,
    users: UsersReducer
});

export default rootReducer;