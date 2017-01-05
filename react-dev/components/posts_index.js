import React, { Component } from 'react';

import { connect } from 'react-redux';

import _ from 'lodash';

import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';

import { fetchPosts, fetchSiteInfo } from '../actions/index';

class PostsIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();
    this.props.fetchSiteInfo();
  }

  createMarkup(post) {
    let body = post.body.split(' ');
    body = body.slice(1, 50);
    body = body.join(' ');
    return `${body}...`;
  }
  renderPosts() {
    if (_.isEmpty(this.props.posts)) {
      return <li> Loading! </li>;
    }

    return this.props.posts.map((post) => {
      return (
        <Paper key={post.title} zDepth={3} style={this.style} className="paper-posts-index" >
          <li key={post.title}>
              <strong><h2>{post.title}</h2></strong>
              <p>{this.createMarkup(post)}</p>
              <div className="div-container">
                <a href={`${this.props.siteInfo.url}${post.url}`} >
                  <RaisedButton
                    target="{post.url}"
                    label="Read More"
                    labelPosition="before"
                    secondary={true}
                    icon={<FontIcon className="material-icons">&#xE037;</FontIcon>}
                    className="raised-button-override"
                  />
                </a>
            </div>
          </li>
        </Paper>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderPosts()}
        </ul>
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
