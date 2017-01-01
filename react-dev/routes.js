import React from 'react';
import { Route } from 'react-router';

import App from './components/app';
import NotFound from './components/notFound';

export default (
  <Route path="/" component={App} >
    <Route component={NotFound} path="*" />
  </Route>
);

/*export default (
  <Route component={App} >
    <IndexRoute path='/' component={NotFound} />
  </Route>
);*/
