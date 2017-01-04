import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { fetchSiteInfo } from '../actions/index';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, config: {} };
  }

  componentWillMount() {
    this.props.fetchSiteInfo();
  }
  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div id="wrapper">
        <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={
            <img src={`${this.props.siteURL}/static/img/logo.png`} />}
        />
        <Drawer open={this.state.open}>
          <AppBar
            title="Menu"
            onLeftIconButtonTouchTap={this.handleToggle}
          />
          <MenuItem>Item!</MenuItem>
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
