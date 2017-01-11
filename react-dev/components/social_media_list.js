import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import { green900 } from 'material-ui/styles/colors';
import _ from 'lodash';

const iconStyles = {
  icon: {
    marginRight: 10,
  }
};

//iterate over urls and create the right url based on social media link,
//then render the FontIcon
const renderIcons = (social) => {
    const result = [];
  _.forEach(social, (value, key) => {
    result.push(
      <a href={value} key={key}>
        <FontIcon
          className={`zmdi zmdi-${key}`}
          style={iconStyles.icon}
          hoverColor={green900}
        />
    </a>
    );
});
    return result.map(element => element);
};


export const SocialMediaList = (props) => {
    if (_.isEmpty(props.social)) {
       return <span />;
     }
     return (
    <span style={props.style}>
      {renderIcons(props.social)}
    </span>
  );
  };
