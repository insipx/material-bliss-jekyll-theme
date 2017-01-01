import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

module.exports = (
  <Route component={App} >
    <IndexRoute path='/' component={App} />
  </Route>
);


/*export default (
  <Route component={App} >
    <IndexRoute path='/' component={NotFound} />
  </Route>
);*/
