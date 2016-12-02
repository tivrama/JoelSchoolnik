import axios from 'axios';

export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECT = 'FETCH_PROJECT';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export function fetchProjects() {
  const request = axios.get(`${ROOT_URL}/projects`);

  return {
    type: FETCH_PROJECTS,
    payload: request
  };
}


export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/projects/${id}`);

  return {
    type: FETCH_PROJECT,
    payload: request
  };
}
