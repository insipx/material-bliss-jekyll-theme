import React from 'react';

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

export const SignupForm = () => {
  return (
   <div id="mc_embed_signup" style={styles.signup}>
     <form
       action={action}
       method="post"
       id="mc-embedded-subscribe-form"
       name="mc-embedded-subscribe-form"
       className="validate"
       target="_blank"
       noValidate
     >
      <div id="mc_embed_signup_scroll">
        <div>
        <label htmlFor="mce-EMAIL">Subscribe!!</label>
        </div>
        <TextField type="email" value="" name="EMAIL" hintText="Email" />
          { /* don't touch this part */ }
          <div style={styles.robotDiv} aria-hidden="true">
            <input
              type="text"
              name="b_f1a0e46a4769f1cbba967ae1d_517d09234a"
              tabIndex="-1"
              value=""
            />
          </div>
          <RaisedButton type="submit" label="Subscribe" name="subscribe" secondary />
      </div>
     </form>
   </div>
 );
};
