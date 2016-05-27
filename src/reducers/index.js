import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
// npm install --save redux-form@4.1.3
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
     posts: PostsReducer,
     form: formReducer
});

export default rootReducer;
