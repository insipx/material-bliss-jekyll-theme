import React from 'react';
import Toggle from 'material-ui/Toggle';

import { green800, green900, cyan500 } from 'material-ui/styles/colors';

import { getLink } from '../helpers';
import { SocialMediaList } from './social_media_list';

function getLogo(logo, logoURL) {
    if (!logo) {
      return;
    }
    return (<img role="presentation" src={logoURL} />);
  }

const styles = {
    toggle: {
      marginBottom: 10,
    },
    thumbSwitched: {
      backgroundColor: green900,
    },
    trackSwitched: {
      backgroundColor: green800,
    },
    trackOff: {
      backgroundColor: cyan500,
    }
  };

export const RightBar = (props) => {
 return (
   <span>
     <span>
       {getLink(getLogo(props.logo, props.logoURL),
         '',
         props.url,
         '/')}
         <Toggle
           label="Toggle Dark Theme"
           labelPosition="right"
           defaultToggled
           style={styles.toggle}
           thumbSwitchedStyle={styles.thumbSwitched}
           trackSwitchedStyle={styles.trackSwitched}
           trackStyle={styles.trackOff}
         />
       </span>
       <span>
        <SocialMediaList />
       </span>
     </span>
);
};
