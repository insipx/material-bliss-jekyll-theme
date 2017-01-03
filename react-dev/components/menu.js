import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div id="wrapper">
        <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<img src={`${this.props.siteURL}/static/img/logo.png`} />}
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
              title="Andrew Plaza"
              subtitle="Blogger || Computer Scientist"
              avatar="http://api.adorable.io/avatar/aplaza@liquidthink.net"
            />
            <CardTitle title="About" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </Drawer>
      </div>
    );
  }
}
