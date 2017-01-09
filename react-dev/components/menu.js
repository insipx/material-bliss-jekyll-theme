import React from 'react';
import _ from 'lodash';

import MenuItem from 'material-ui/MenuItem';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


import { getLink } from '../helpers';

const menuItems = { Home: '/', About: '/about/' };

const getMenuItem = (name, path, url) => {
  return getLink(
    <MenuItem>{name}</MenuItem>,
    name,
    url, //the site root url
    path
  );
};

const renderMenuItems = (url) => {
  const result = [];
   _.forEach(menuItems, (value, key) => {
      result.push(getMenuItem(key, value, url));
  });
  return result.map((item) => { return item; });
};

export const MenuItems = props => {
  return (
    <div>
      {renderMenuItems(props.siteURL)}
      <Card>
        <CardHeader
          title={props.name}
          subtitle={props.subtitle}
          avatar={props.avatar}
        />
        <CardTitle title="About" />
        <CardText>
          {props.description}
        </CardText>
        <CardActions>
          {getLink(
            <RaisedButton label="More About Me" primary />,
            '',
            props.siteURL,
            '/about/'
          )}
        </CardActions>
      </Card>
  </div>
  );
};
