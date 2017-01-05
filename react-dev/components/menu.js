import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router';

import { green800, green900, cyan500 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';

import { fetchSiteInfo } from '../actions/index';
import { updateDimensions } from '../helpers';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, config: {}, width: 1200, height: null };
  }

  componentWillMount() {
    this.props.fetchSiteInfo();
    this.setState(updateDimensions());
  }
  componentDidMount() {
    window.addEventListener('resize', this.setState(updateDimensions()));
  }
  componentWillUnmount() {
    window.addEventListener('resize', this.setState(updateDimensions()));
  }

  getMenuWidth = () => {
    if (this.state.width > 1000) return 400;
    else if (this.state.width <= 800) return 350;
    else if (this.state.width <= 600) return 256;
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  toggleStyles = {
    block: {
      maxWidth: 250,
    },
    toggle: {
      marginBottom: 16,
    },
    labelStyle: {
      color: 'blue',
    },
    thumbSwitched: {
      backgroundColor: green900
    },
    trackSwitched: {
      backgroundColor: green800
    },
    trackOff: {
      backgroundColor: cyan500
    }
  };

  render() {
    return (
      <div id="wrapper">
        <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={
            <div>
              <Link to="/" >
                <img role="presentation" src={this.props.config.url + '/' + this.props.config.logo} />
              </Link>
              <Toggle
                label="Toggle Dark Theme"
                labelPosition="right"
                defaultToggled={true}
                style={this.toggleStyles.toggle}
                thumbSwitchedStyle={this.toggleStyles.thumbSwitched}
                trackSwitchedStyle={this.toggleStyles.trackSwitched}
                trackStyle={this.toggleStyles.trackOff}
              />
            </div>
          }
        />
        <Drawer open={this.state.open} width={this.getMenuWidth()}>
          <AppBar
            title="Menu"
            onLeftIconButtonTouchTap={this.handleToggle}
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
              <Link to="/about/">
                <RaisedButton label="More About Me" primary={true} />
              </Link>
            </CardActions>
          </Card>
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { config: state.siteInfo.all };
}

export default connect(mapStateToProps, { fetchSiteInfo })(Menu);
