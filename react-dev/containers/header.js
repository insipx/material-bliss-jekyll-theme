import React, { Component } from 'react';
import classnames from 'classnames';

import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import { fetchSiteInfo } from '../actions/index';

import Menu from '../components/menu';
import { RightBar } from '../components/right_menu_bar';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false, width: 1200, height: null };
  }

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
            <RightBar config={this.props.config} handleThemeSwitch={this.props.handleThemeSwitch} />}
        />
        <Menu open={this.state.open} handleToggle={this.handleToggle} config={this.props.config} location={this.props.location} />

        {<div className={classnames('app-content', { expanded: this.state.open })}> { this.props.children } </div>}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { config: state.siteInfo.all };
}

export default connect(mapStateToProps, { fetchSiteInfo })(Header);
