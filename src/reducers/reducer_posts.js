/* 
     include:  ""import PostsReducer from './reducer_posts';
     in reducers/index.js 
*/
import { FETCH_POSTS, FETCH_POST } from '../actions/index';

/*  all = all posts "index page"
     post = single post/show action
*/
const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
     switch(action.type) {
     case FETCH_POST:
          return { ...state, post: action.payload.data };     
     case FETCH_POSTS:     
          // new object, take current state, and add property "api response"
          return { ...state, all: action.payload.data };
     default:
          return state;
     }
}