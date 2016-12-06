import axios from 'axios';

export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECT = 'FETCH_PROJECT';

// const ROOT_URL = 'http://localhost:8080/api';
const ROOT_URL = '/api';

const allProjects = [
  {
    "_id": "584200057933f00452053e86",
    "__v": 0,
    "priority": 0,
    "url": "www.gourmandapp.com",
    "details": "Front end uses react with redux.  Backend is node/express server with mongo db.",
    "description": "Log your fine foods",
    "name": "Gourmand"
  },
  {
    "_id": "584200687933f00452053e87",
    "__v": 0,
    "priority": 1,
    "url": "www.emordnilapalindro.me",
    "details": "Mean stack with Angular Material",
    "description": "Test your palindromes - letter, binary, genomic",
    "name": "EmordnilaPalindrome"
  },
  {
    "_id": "584201087933f00452053e88",
    "__v": 0,
    "priority": 2,
    "url": "www.binaryclock-herokuapp.com",
    "details": "Mean stack with bootstrap",
    "description": "Time, Timer, Pomodaro, translator  - all in binary",
    "name": "Binary Clock"
  },
  {
    "_id": "584203437933f00452053e89",
    "__v": 0,
    "priority": 3,
    "url": "www.npm-datastructures.com",
    "details": "ID based datastructures in Javascript - Graph, Tree, Binary Tree, Linked List",
    "description": "Javascript datastructures in ES6",
    "name": "Data Structures"
  },
  {
    "_id": "584237cb62876c07cf22cc68",
    "__v": 0,
    "priority": 4,
    "url": "www.dcydr-herokuapp.com",
    "details": "Angular app with websockets",
    "description": "Make group desicions quickly!",
    "name": "Dcydr"
  }
];

export function fetchProjects() {
  // const request = axios.get(`${ROOT_URL}/projects`);
  const request = allProjects;
  return {
    type: FETCH_PROJECTS,
    payload: request
  };
}


export function fetchProject(name) {
  // const request = axios.get(`${ROOT_URL}/projects/${name}`);
  let request;
  for (let i = 0; i < allProjects.length; i++) {
    if (allProjects[i].name === name) {
      request = allProjects[i];
      break;
    }
  }
  return {
    type: FETCH_PROJECT,
    payload: request
  };
}
