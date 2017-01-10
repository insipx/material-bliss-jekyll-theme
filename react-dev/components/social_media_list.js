import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import { green900 } from 'material-ui/styles/colors';
import _ from 'lodash';

const iconStyles = {
  icon: {
    marginRight: 10,
  }
};

//merge into one object and do it that way
const icons = {
  github: 'zmdi-github',
  facebook: 'zmdi-facebook',
  twitter: 'zmdi-twitter',
  gplus: 'zmdi-google-plus',
  coding: 'zmdi-coding',
  rss: 'zmdi-rss'
};

const urls = {
  github: 'http://www.github.com/',
  facebook: 'http://www.facebook.com/',
  twitter: 'http://www.twitter.com/',
  gplus: 'https://plus.google.com/',
  coding: 'http://www.livecoding.tv/',
  rss: 'http://www.test_domain.com:4000/'
};

//iterate over urls and create the right url based on social media link,
//then render the FontIcon
const renderIcons = () => {
    const result = [];
  _.forEach(urls, (value, key) => {
    result.push(
      <FontIcon
        className={`zmdi ${icons[`${key}`]}`}
        style={iconStyles.icon}
        hoverColor={green900}
        key={key}
      />);
});
    return result.map(element => element);
};

/*

          <a href={`${key}${icons.value}`} key={icons.value} >
            <FontIcon
              className={`zmdi ${icons.value}`}
              style={iconStyles.icon}
              hoverColor={green900}
            />
          </a>
 */

export const SocialMediaList = (props) => (
    <span style={props.style}>
      {renderIcons()}
    </span>
  );
