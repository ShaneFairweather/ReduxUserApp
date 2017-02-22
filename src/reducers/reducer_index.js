import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import PostListReducer from './reducer_postList';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
    form,
    posts: PostsReducer,
    postList: PostListReducer
});

export default rootReducer;