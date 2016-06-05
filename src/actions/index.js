/*
the purpose of this action creator is to reach out and grab list of posts from the API 
*/

import axios from 'axios';

// define action type
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';

// root url for api
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=markasldfjasld';

// action creator to fetch posts
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
export function createPost(props) {
     const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
     
     return {
          type: CREATE_POST,
          payload: request
     };
}

export function fetchPost(id) {
     const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
     
     return {
          type: FETCH_POST,
          payload: request
     };
}