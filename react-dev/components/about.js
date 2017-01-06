import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPost } from '../actions/index';


class About extends Component {

  componentWillMount() {
    this.props.fetchPost("About");
  }

  render() {
    if (!this.props.pageInfo) {
      return (
        <div> Loading </div>
      );
    }
    return (
      <div> loading </div>
    );
  }
}

function mapStateToProps(state) {
  return { pageInfo: state.posts.post };
}


export default connect(mapStateToProps, { fetchPost })(About);
