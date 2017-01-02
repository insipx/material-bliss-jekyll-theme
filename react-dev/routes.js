import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import NotFound from './components/notFound';

export default (
  <Route path="/" component={App} >
    <Route component={NotFound} path="*" />
  </Route>
);
