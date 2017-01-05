import React, { Component } from 'react';

//MUI React Library
import { blueGrey800, grey50, teal900, green900, green500, teal500, cyan500 } from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from '../components/header';

//dependency will go away once official React version released
injectTapEventPlugin();
//style overrides
const muiTheme = getMuiTheme(darkBaseTheme, {
  palette: {
    primary1Color: blueGrey800,
    primary2Color: green900,
    primary3Color: teal900,
    accent1Color: green500,
    accent2Color: teal500,
    accent3Color: cyan500,
    //canvasColor: grey50,
    textColor: grey50,
    alternateTextColor: grey50, //color on header
    //pickerHeaderColor: grey900
  },
  appBar: {
    height: 100
  },
  });

export default class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Header />
            {this.props.children}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
