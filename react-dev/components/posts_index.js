import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
      if (!this.props.posts.entries) { return; }

      console.log(this.props.posts.entries);

      return this.props.posts.map((post) => {
        return (
          <li key={post.entries.title}>
            <strong>{post.entries.title}</strong>
          </li>
        );
      });
    }
  render() {
    return (
      <div>
        <div> Hey! Posts Heres</div>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
