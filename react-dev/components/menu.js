import React, { Component } from 'react';

import { Link, IndexLink } from 'react-router';

import _ from 'lodash';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { updateDimensions } from '../helpers';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = { open: this.props.open };
  }

  //event listeners for dynamic resizing of the menu
  //couldn't figure out a way to do this purely with CSS
  componentWillMount() {
    this.setState(updateDimensions());
  }
  componentDidMount() {
    window.addEventListener('resize', this.setState(updateDimensions()));
  }
  componentWillUnmount() {
    window.addEventListener('resize', this.setState(updateDimensions()));
  }

  getMenuWidth = () => {
    //some responsiveness to the menu
    if (this.state.width > 1600) return 450;
    else if (this.state.width <= 1600) return 350;
    else if (this.state.width <= 1400) return 300;
    else if (this.state.width <= 800) return 256;
  }

  // a function to tell if we need to reload the page (for static content) or
  //  we are OK just changing the route (for dynamic content). This makes
  //   navigation to some parts of the website seem almost instant
  getMenuItem(name, path) {
    const currPath = window.location.pathname;
    if (currPath.match('(/posts/)+.*') === null) {
      return (
        <Link to={path} key={name}>
          <MenuItem>{name}</MenuItem>
        </Link>
      );
    }
    return (
      <a href={`${this.props.config.url}${path}`} key={name}>
        <MenuItem>{name}</MenuItem>
      </a>
    );
  }
    menuItems = { Home: '/', About: 'about/' };

  renderMenuItems() {
    const result = [];
     _.forEach(this.menuItems, (value, key) => {
        result.push(this.getMenuItem(key, value));
    });
    console.log(result);
    return result.map((item) => { return item; });
  }

  render() {
    return (
      <Drawer open={this.props.open} width={this.getMenuWidth()}>
        <AppBar
          title="Menu"
          onLeftIconButtonTouchTap={this.props.handleToggle}
        />
        {this.renderMenuItems()}
        <Card>
          <CardHeader
            title={this.props.config.name}
            subtitle={this.props.config.menu_right_subtitle}
            avatar={this.props.config.avatar}
          />
          <CardTitle title="About" />
          <CardText>
            {this.props.config.description}
          </CardText>
          <CardActions>
            <IndexLink to="about/">
              <RaisedButton label="More About Me" primary />
            </IndexLink>
          </CardActions>
        </Card>
      </Drawer>
    );
    }
}
