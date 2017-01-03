import React, { Component } from 'react';

//MUI React Library
import { blueGrey900, green900, grey400, cyan900, cyan200, cyan300, grey900, grey50 } from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Menu from '../components/menu';

//dependency will go away once official React version released
injectTapEventPlugin();
//style overrides
const muiTheme = getMuiTheme(darkBaseTheme, {
  palette: {
    primary1Color: blueGrey900,
    primary2Color: grey50,
    primary3Color: grey50,
    accent1Color: grey50,
    accent2Color: grey50,
    accent3Color: grey50,
    canvasColor: grey50,
    textColor: grey900,
    alternateTextColor: grey50, //color on header
    pickerHeaderColor: grey900
  },
  appBar: {
    height: 70
  },
  drawer: {
    width: 350
  }
  });

const siteurl = 'http://test_domain.com:4000/';

export default class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
            <Menu siteURL={siteurl} />
        </MuiThemeProvider>
        {this.props.children}
      </div>
    );
  }
}
