import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import { green900 } from 'material-ui/styles/colors';

const iconStyles = {
  icon: {
    marginRight: 10,
  }
};

const icons = [
  ' zmdi-github',
  'zmdi-facebook',
  'zmdi-twitter',
  'zmdi-google-plus',
  'zmdi-instagram',
  'zmdi-rss'
];

const renderIcons = () => icons.map(icon => (
          <FontIcon className={`zmdi ${icon}`} style={iconStyles.icon} />
  ));

export const SocialMediaList = (props) => (
    <span style={props.style}>
      {renderIcons()}
    </span>
  );
