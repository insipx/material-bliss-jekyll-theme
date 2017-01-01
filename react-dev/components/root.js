import React, { Component } from 'react';
import Html from 'react-html-document';
import Router, { RouteHandler } from 'react-router';

export default class Root extends Component {
  render() {
    const description = "random description";
    const url = "https://localhost:8080";
    const metatags = [
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { name: 'description', content: description },
      { name: 'og:url', content: url },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Vote for Bernie' },
      { name: 'og:description', content: description },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@berniesanders' },
      { name: 'twitter:title', content: 'Vote for Bernie' },
      { name: 'twitter:description', content: description },
      { httpEquiv: 'content-type', content: 'text/html; charset=utf-8' }
    ]
    const scripts = ['../../src/_assets/js/bundle.js'];

    return (
      <Html title='BLAH' metatags={metatags} scripts={scripts}>
        <div id='app'>
          {this.props.children}
        </div>
      </Html>
    );
  }
}
