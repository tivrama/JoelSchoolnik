// import axios from 'axios';

// export const FETCH_PROJECTS = 'FETCH_PROJECTS';

// const ROOT_URL = 'http://myServer.com';
// const API_KEY = '?key=TheMostSecretKey';

// export function fetchProjects() {
//   const request = axios.get(`${ROOT_URL}/projects${API_KEY}`);

//   return {
//     type: FETCH_PROJECTS,
//     payload: request
//   };
// }


import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=TheMostSecretKey';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
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
