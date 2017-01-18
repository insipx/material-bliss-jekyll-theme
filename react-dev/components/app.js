import React, { Component } from 'react';

//MUI React Library
import {
  green900, green500,
  teal900, teal500,
  blueGrey800,
  grey50,
  cyan500
} from 'material-ui/styles/colors'; //greens

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from '../containers/header';
import Footer from '../containers/footer';

//dependency will go away once official React version released
injectTapEventPlugin();

//style overrides
const darkMuiTheme = getMuiTheme(darkBaseTheme, {
  palette: {
    primary1Color: blueGrey800,
    primary2Color: green900,
    primary3Color: teal900,
    accent1Color: green500,
    accent2Color: teal500,
    accent3Color: cyan500,
    textColor: grey50,
    alternateTextColor: grey50, //color on header
    //pickerHeaderColor: grey900
  },
  appBar: {
    height: 100
  }
});

const lightMuiTheme = getMuiTheme(lightBaseTheme, {
  pallete: {
    primary1Color: grey50,
    primatry2Color: grey50,
    primary3Color: grey50
  },
  appBar: {
    height: 100
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { dark: true };
  }
  shouldComponentUpdate(nextState) {
    if (this.state.dark !== nextState.dark) {
      return true;
    }
  }

  getTheme = () => {
    if (this.state.dark) {
      return darkMuiTheme;
    }
    return lightMuiTheme;
  }

  handleToggle = () => {
    this.setState({ dark: !this.state.dark });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={this.getTheme()}>
          <div>
            <Header location={this.props.location} handleThemeSwitch={this.handleToggle}>
              {this.props.children}
            <Footer />
          </Header>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
