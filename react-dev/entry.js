import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TestReactComponent from './components/TestReactComponent';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <TestReactComponent />
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
