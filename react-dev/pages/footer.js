import React from 'react';
import Paper from 'material-ui/Paper';

import { blueGrey800, grey50, teal900, green900, green500, teal500, cyan500 } from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';

import { SignupForm } from '../components/signup_form';
import { SocialMediaStatic } from './social_media_static';

const muiTheme = getMuiTheme(darkBaseTheme, {
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
  });

injectTapEventPlugin();

export const Footer = () => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Paper zDepth={3} className="paper-footer-wrapper">
      <footer className="site-footer">
        <div className="wrapper">
          <div className="footer-col-wrapper">
            <div className="footer-col footer-col-1">
              <ul className="contact-list">
                <li>{'{{ site.react.title }}'}</li>
                <li><a href={'mailto:{{site.react.email}}'}>{'{{site.react.email}}'}</a></li>
              </ul>
            </div>
            <div className="footer-col footer-col-2" >
              <SocialMediaStatic />
            </div>
           <div className="footer-col footer-col-3">
             <SignupForm />
            </div>
          </div>
        </div>
      </footer>
    </Paper>
  </MuiThemeProvider>
  );
};
