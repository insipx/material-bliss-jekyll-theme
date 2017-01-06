import React, { Component } from 'react';

import { Link } from 'react-router';

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


  render() {
    return (
      <Drawer open={this.props.open} width={this.getMenuWidth()}>
        <AppBar
          title="Menu"
          onLeftIconButtonTouchTap={this.props.handleToggle}
        />
        <a href={this.props.config.url}>
          <MenuItem>Home</MenuItem>
        </a>
        <MenuItem>Item!</MenuItem>
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
            <Link to="/about">
              <RaisedButton label="More About Me" primary={true} />
            </Link>
          </CardActions>
        </Card>
      </Drawer>
    );
    }
}
