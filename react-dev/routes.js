import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
//posts route should match whatever is in the Jekyll config
export default (
  <Route path="/" component={App} >
    <Route path="posts/:title" />
  </Route>
);
