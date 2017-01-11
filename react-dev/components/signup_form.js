import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  signup: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  robotDiv: {
    position: 'absolute',
    left: -5000
  }
};

const action = '//liquidthink.us10.list-manage.com/subscribe/post?u=f1a0e46a4769f1cbba967ae1d&amp;id=517d09234a';

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
  return (
   <div id="mc_embed_signup" style={styles.signup}>
     <form
       action={action}
       method="post"
       id="mc-embedded-subscribe-form"
       name="mc-embedded-subscribe-form"
       target="_blank"
       noValidate
     >
      <div id="mc_embed_signup_scroll">
        <div>
        <label htmlFor="mce-EMAIL">Subscribe!!</label>
        </div>
        <TextField
          type="email"
          value={this.state.value}
          name="EMAIL"
          hintText="Email"
          onChange={this.handleChange}
        />
          { /* don't touch this part */ }
          <div style={styles.robotDiv} aria-hidden="true">
            <input
              type="text"
              name="b_f1a0e46a4769f1cbba967ae1d_517d09234a"
              tabIndex="-1"
              value=''
            />
          </div>
          <RaisedButton type="submit" label="Subscribe" name="subscribe" secondary />
      </div>
     </form>
   </div>
 );
 }

}
