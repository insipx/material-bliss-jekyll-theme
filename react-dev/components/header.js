import React, { Component } from 'react';
import classnames from 'classnames';

import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import { fetchSiteInfo } from '../actions/index';

import { RightBar } from './right_menu_bar';
import { MenuItems } from './menu';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false, config: {}, width: 1200, height: null };
  }

  componentWillMount() {
    this.props.fetchSiteInfo();
    this.setState(this.updateDimensions());
  }

  componentDidMount() {
    window.addEventListener('resize', this.setState(this.updateDimensions()));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.setState(this.updateDimensions()));
  }

  getMenuWidth = () => {
    //some responsiveness to the menu
    if (this.state.width > 1600) return 400;
    else if (this.state.width <= 1600 && this.state.width > 1200) return 350;
    else if (this.state.width <= 1200 && this.state.width > 800) return 300;
    else if (this.state.width <= 800) return 256;
  }

  updateDimensions = () => {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
    return ({ width, height });
  };

  //push out menu for static post content
  toggleStaticPostContent = () => {
    const staticContent = document.getElementById('single-post-content');
    if (staticContent) {
      staticContent.classList.toggle('expanded');
    }
  }

  // items for the menu, add or remove depending on your routes

  handleToggle = () => {
    this.setState({ open: !this.state.open });
    this.toggleStaticPostContent();
  };

  hideMenuButton = () => {
    if (this.state.open) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <AppBar
          className='app-bar'
          onLeftIconButtonTouchTap={this.handleToggle}
          showMenuIconButton={this.hideMenuButton()}
          iconElementRight={
            <RightBar config={this.props.config} />}
        />
        <Drawer
          docked
          width={this.getMenuWidth()}
          open={this.state.open}
          onRequestChange={(open) => { return this.setState({ open }); }}
        >
          <AppBar title="Menu" onLeftIconButtonTouchTap={this.handleToggle} />
          <MenuItems config={this.props.config} />
        </Drawer>
        {<div className={classnames('app-content', { expanded: this.state.open })}> { this.props.children } </div>}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { config: state.siteInfo.all };
}

export default connect(mapStateToProps, { fetchSiteInfo })(Header);
