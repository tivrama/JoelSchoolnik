import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ProjectsIndex from './components/projects_index';
import ProjectsShow from './components/projects_show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProjectsIndex} />
    <Route path="projects/:id" component={ProjectsShow} />
  </Route>
);
