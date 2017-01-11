import React from 'react';
import IconButton from 'material-ui/IconButton';
import { green900 } from 'material-ui/styles/colors';


const iconStyles = {
  icon: {
    marginRight: 8,
    iconHoverColor: green900,
  },
  hoveredStyle: {
    color: green900,
  },
  linkStyle: {
    padding: 0,
    width: 28,
  }
};

//iterate over urls and create the right url based on social media link,
//then render the FontIcon

export const SocialMediaStatic = () => {
  return (
    <span>

    {'{% if site.react.social.twitter %}'}
    <IconButton
      iconClassName='zmdi zmdi-twitter'
      style={iconStyles.linkStyle}
      iconStyle={iconStyles.icon}
      tooltip='twitter'
      tooltipPosition="top-right"
      href={'{{site.react.social.twitter}}'}
      key='twitter'
    />
    {'{% endif %}'}

    {'{% if site.react.social.github %}'}
    <IconButton
      iconClassName='zmdi zmdi-github'
      style={iconStyles.linkStyle}
      iconStyle={iconStyles.icon}
      tooltip='github'
      tooltipPosition="top-right"
      href={'{{site.react.social.github}}'}
      key='github'
    />
    {'{% endif %}'}

    {'{% if site.react.social.facebook %}'}
    <IconButton
      iconClassName='zmdi zmdi-facebook'
      style={iconStyles.linkStyle}
      iconStyle={iconStyles.icon}
      tooltip='facebook'
      tooltipPosition="top-right"
      href={'{{site.react.social.facebook}}'}
      key='facebook'
    />
    {'{% endif %}'}

    {'{% if site.react.social.code %}'}
    <IconButton
      iconClassName='zmdi zmdi-code'
      style={iconStyles.linkStyle}
      iconStyle={iconStyles.icon}
      tooltip='livecoding'
      tooltipPosition="top-right"
      href={'{{site.react.social.code}}'}
      key='livecode'
    />
    {'{% endif %}'}

    {'{% if site.react.social.google-plus %}'}
    <IconButton
      iconClassName='zmdi zmdi-google-plus'
      style={iconStyles.linkStyle}
      iconStyle={iconStyles.icon}
      tooltip='google-plus'
      tooltipPosition='top-right'
      href={'{{site.react.social.google-plus}}'}
      key='google-plus'
    />
    {'{% endif %}'}

    {'{% if site.react.social.rss %}'}
    <IconButton
      iconClassName='zmdi zmdi-rss'
      style={iconStyles.linkStyle}
      iconStyle={iconStyles.icon}
      tooltip='rss-feed'
      tooltipPosition='top-right'
      href={'{{site.react.social.rss}}'}
      key='rss'
    />
    {'{% endif %}'}
  </span>
  );
};
