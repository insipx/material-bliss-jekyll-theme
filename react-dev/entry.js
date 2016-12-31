import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOMServer from 'react-dom/server';
import { browserHistory } from 'history';
import { Router } from 'react-router';

import routes from './routes';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />, document.getElementById('root'));

  /*export default (locals, callback) => {
    const history = createMemoryHistory();
    const location = history.createLocation(locals.path);

    match({ routes, location }, (error, redirectLocation, renderProps) => {
      callback(null, template({
        html: ReactDOMServer.renderToString(<RoutingContext {...renderProps} />),
        assets: locals.assets
      }));
    });
  };*/
