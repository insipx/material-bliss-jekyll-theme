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
      marginBottom: 5,
    },
    thumbSwitched: {
      backgroundColor: green900,
    },
    trackSwitched: {
      backgroundColor: green800,
    },
    trackOff: {
      backgroundColor: cyan500,
    },
    input: {
        width: '43%',
    },
    spanToggle: {
      float: 'left',
      position: 'relative',
    },
    divMargin: {
      marginRight: -156,
    },
    spanSocial: {
      float: 'left',
      position: 'relative',
      right: 180,
      top: 35,
  }
  };

export const RightBar = (props) => {
 return (
  <div style={styles.divMargin}>
     <span style={styles.spanToggle}>
       {getLink(getLogo(props.config.logo, `${props.config.url}/${props.config.logo}`),
         '',
         props.config.url,
         '/')}
         <Toggle
           label="Toggle Theme"
           labelPosition="right"
           defaultToggled
           style={styles.toggle}
           inputStyle={styles.input}
           thumbSwitchedStyle={styles.thumbSwitched}
           trackSwitchedStyle={styles.trackSwitched}
           trackStyle={styles.trackOff}
         />
       </span>
      <SocialMediaList style={styles.spanSocial} social={props.config.social} />
     </div>
); 
};
