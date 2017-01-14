import React from 'react';
import _ from 'lodash';

import MenuItem from 'material-ui/MenuItem';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { SocialMediaList } from './social_media_list';

import { getLink } from '../helpers';

const menuItems = { Home: '/', About: '/about/', Projects: '/projects/' };

const styles = {
  spanSocial: {
    float: ' left',
    paddingLeft: '25%',
    paddingTop: 20,
  }
};
const getMenuItem = (name, path, url) => getLink(
    <MenuItem>{name}</MenuItem>,
    name,
    url, //the site root url
    path
  );

const renderMenuItems = (url) => {
  const result = [];
   _.forEach(menuItems, (value, key) => {
      result.push(getMenuItem(key, value, url));
  });
  return result.map((item) => item);
};

export const MenuItems = props => (
    <div>
      {renderMenuItems(props.config.url)}
      <Card>
        <CardHeader
          title={props.config.name}
          subtitle={props.config.menu_right_subtitle}
          avatar={props.config.avatar}
        />
        <CardTitle title="About" />
        <CardText>
          {props.config.description}
        </CardText>
        <CardActions>
          {getLink(
            <RaisedButton label="More About Me" primary />,
            '',
            props.config.url,
            '/about/'
          )}
        </CardActions>
      </Card>
      <SocialMediaList style={styles.spanSocial} social={props.config.social} />
  </div>
  );
