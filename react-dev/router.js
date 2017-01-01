import React from 'react';
import ReactDOM, { render } from 'react-dom';
import ReactDOMServer, { renderToStaticMarkup } from 'react-dom/server';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';

import App from './components/app';

import routes from './routes';
