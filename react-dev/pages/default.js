import React, { Component } from 'react';

export default class Default extends Component {
  render() {
    return (
      <html lang="en">
        {'{% include head.html %}'}
          <body>
            <div id="root" />
            { '{{ content }}'}
          </body>
          {'{% js bundle %}'}
      </html>
    );
  }
}
