import React, { Component } from 'react';

//MUI React Library
import { cyan500 } from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Menu from '../components/menu';

const muiTheme = getMuiTheme(darkBaseTheme, {
  appBar: {
    height: 50,
  },
  });

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
          <Menu />
      </MuiThemeProvider>
    );
  }
}
