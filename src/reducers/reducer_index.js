import { createStore, combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import PostListReducer from './reducer_postList';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    posts: PostsReducer,
    postList: PostListReducer
});

export default rootReducer;