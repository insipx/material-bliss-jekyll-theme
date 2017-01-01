import React from 'react';
import { Route, IndexRoute } from 'react-router';
import NotFound from './components/notFound';

import App from './components/app';
import Menu from './components/Menu';

module.exports = (
  <Route component={App} >
    <IndexRoute path='/' component={NotFound} />
  </Route>
)


/*export default (
  <Route component={App} >
    <IndexRoute path='/' component={NotFound} />
  </Route>
);*/
