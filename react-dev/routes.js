import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './containers/posts_index';
import About from './containers/about';
import ProjectsIndex from './containers/projects_index';
//posts route should match whatever is in the Jekyll config

export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostsIndex} />
    <Route path="posts/:title" />
    <Route path="about/" component={About} />
    <Route path="projects/" component={ProjectsIndex} />
  </Route>
);
