import React, { Component } from 'react';

import { connect } from 'react-redux';

import { PostIndexItem } from '../components/post_index_item';
import { fetchPosts, fetchSiteInfo } from '../actions/index';

class PostsIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();
    this.props.fetchSiteInfo();
  }

  render() {
    return (
      <div>
          <PostIndexItem posts={this.props.posts} siteInfo={this.props.siteInfo} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all,
    siteInfo: state.siteInfo.all
  };
}

export default connect(mapStateToProps, { fetchPosts, fetchSiteInfo })(PostsIndex);
