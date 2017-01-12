import React from 'react';
import IconButton from 'material-ui/IconButton';
import { green900 } from 'material-ui/styles/colors';
import _ from 'lodash';

const iconStyles = {
  icon: {
    marginRight: 10,
    iconHoverColor: green900,
  },
  hoveredStyle: {
    color: green900,
  },
  linkStyle: {
    padding: 0,
    width: 30,
  }
};

//iterate over urls and create the right url based on social media link,
//then render the FontIcon
const renderIcons = (social) => {
    const result = [];
  _.forEach(social, (value, key) => {
    result.push(
      <IconButton
        iconClassName={`zmdi zmdi-${key}`}
        style={iconStyles.linkStyle}
        iconStyle={iconStyles.icon}
        tooltip={key}
        tooltipPosition="top-right"
        href={value}
        key={key}
      />
    );
});
  return result.map(element => { return element; });
};


export const SocialMediaList = (props) => {
    if (_.isEmpty(props.social)) {
       return <span />;
     }
     return (
    <span style={props.style} className="social-media-list">
      {renderIcons(props.social)}
    </span>
  );
  };
