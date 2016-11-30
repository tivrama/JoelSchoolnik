import axios from 'axios';

export const FETCH_PROJECTS = 'FETCH_PROJECTS';

const ROOT_URL = 'http://myServer.com';
const API_KEY = '?key=TheMostSecretKey';

export function fetchProjects() {
  const request = axios.get(`${ROOT_URL}/projects${API_KEY}`);

  return {
    type: FETCH_PROJECTS,
    payload: request
  };
}
