import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPost } from '../actions/index';

import { Page } from './page';

class About extends Component {

  componentWillMount() {
    this.props.fetchPost("About");
  }

  render() {
    if (!this.props.pageInfo) {
      return (
        <div> Loading FUCKYE </div>
      );
    }
    return (
      <Page title={this.props.pageInfo.title} content={this.props.pageInfo.body} />
    );
  }
}

function mapStateToProps(state) {
  return { pageInfo: state.posts.post };
}


export default connect(mapStateToProps, { fetchPost })(About);
