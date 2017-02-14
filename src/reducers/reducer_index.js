import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import PostListReducer from './reducer_postList';

const rootReducer = combineReducers({
    posts: PostsReducer,
    postList: PostListReducer
});

export default rootReducer;