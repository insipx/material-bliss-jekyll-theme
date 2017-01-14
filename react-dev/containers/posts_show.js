import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

//this is just a test component to make sure that the fetchPost action creator works
class PostsShow extends Component {

  componentWillMount() {
    this.props.fetchPost(this.props.params.title);
  }
  render() {
    const { post } = this.props;
    if (!this.props.post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.body}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
