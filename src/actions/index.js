/*
the purpose of this action creator is to reach out and grab list of posts from the API 
*/

import axios from 'axios';

// define action type
export const FETCH_POSTS = 'FETCH_POSTS';

// root url for api
const ROOT_URL = 'http://reduxblog.herojuapp.com/api';
const API_KEY = '?key=markasldfjasld';

export function fetchPosts() {
     // make request
     const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
     
     // return request as payload***
     return {
          type: FETCH_POSTS,
          payload: request
     };
}

// data flows through reducers 