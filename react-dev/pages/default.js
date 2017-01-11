import React, { Component } from 'react';

export default class Default extends Component {
  render() {
    return (
      <html lang="en">
        {'{% include head.html %}'}
          <body>
            { '{{ content }}'}
            <div id="root" />
          </body>
          {'{% js bundle %}'}
      </html>
    );
  }
}
