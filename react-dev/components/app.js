import React, { Component, Children, cloneElement } from 'react';

//MUI React Library
import { //dark theme
  green900, green500, green800,
  teal900, teal500,
  blueGrey800,
  grey50,
  cyan500,
  //light theme
  brown500,
  grey300, grey400
} from 'material-ui/styles/colors'; //dark theme

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
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
  },
  toggle: {
    thumbDisabledColor: green900,
    trackOffColor: blueGrey800,
    trackOnColor: green900,
    trackDisabledColor: green800,
    thumbOnColor: green900
  }
});

const lightMuiTheme = getMuiTheme(null, {
  appBar: {
    height: 100,
    color: teal500
  },
  toggle: {
    thumbDisabledColor: green900,
    trackOffColor: blueGrey800,
    trackOnColor: green900,
    trackDisabledColor: green800,
    thumbOnColor: green900
  },
  paper: {
    backgroundColor: grey300
  },
  chip: {
    backgroundColor: grey400
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
    console.log(lightMuiTheme);
    return lightMuiTheme;
  }

  handleToggle = () => {
    this.setState({ dark: !this.state.dark });
  }
  //modify children prop with theme state so that it re-renders on-screen
  renderChildren = () => Children.map(this.props.children, (child) => cloneElement(child, [{
        themeState: this.state.dark
      }]));

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={this.getTheme()}>
          <div>
            <Header location={this.props.location} handleThemeSwitch={this.handleToggle}>
              {this.renderChildren()}
            <Footer themeState={this.state.dark} />
          </Header>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
