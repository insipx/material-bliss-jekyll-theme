import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import fse from 'fs-extra';
import { Router, RouterContext, browserHistory, match } from 'react-router';


import routes from './routes';
import App from './components/app';

/*if (typeof document !== 'undefined') {
  //client render
}*/
/*ReactDOM.render(
  <Router history={browserHistory} routes={routes} />, document.getElementById('root'));
  */


 //const html = ReactDOMServer.renderToStaticMarkup(<App />);
//console.log(html);

reactDOM.render(
    <Router history = {browserHistory} routes={routes} />, document.getElementById('root'));
