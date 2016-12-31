import React, { Component } from 'react';
import Html from 'react-html-document';
import Router, { RouteHandler } from 'react-router';

export default class Root extends Component {
  render() {
    const scripts = ['../../src/_assets/js/bundle.js'];

    return (
      <Html title="FUCK THIS" scripts={scripts}>
        <div id='app'>
          {this.props.children}
        </div>
      </Html>
    );
  }
}
