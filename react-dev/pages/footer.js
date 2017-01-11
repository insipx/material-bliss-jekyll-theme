import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import { blueGrey800, grey50, teal900, green900, green500, teal500, cyan500 } from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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


const styles = {
  mc_embed_signup: {
    background: '#fff',
    clear: 'left',
    font: '14px Helvetica,Arial,sans-serif',
    width: '100%',
  },
  divStyle: {
    position: 'absolute',
    left: -5000
  }
};
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

            <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
             <div id="mc_embed_signup" style={styles.mc_embed_signup}>
               <form action="//liquidthink.us10.list-manage.com/subscribe/post?u=f1a0e46a4769f1cbba967ae1d&amp;id=517d09234a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                  <label htmlFor="mce-EMAIL">Subscribe to our mailing list</label>
                  <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />

                    { /* don't touch this part */ }
                    <div style={styles.divStyle} aria-hidden="true">
                      <input type="text" name="b_f1a0e46a4769f1cbba967ae1d_517d09234a" tabIndex="-1" value="" />
                    </div>
               <div className="clear">
                 <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                 </div>
                </div>
               </form>
             </div>
           </div>
           <div className="footer-col footer-col-3">
              {'{{ site.react.description }}'}
            </div>
          </div>
        </div>
      </footer>
    </Paper>
  </MuiThemeProvider>
  );
};
