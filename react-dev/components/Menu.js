import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

export default class Menu extends Component {
  render() {
    return (
      <AppBar
        title="Menu"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}
