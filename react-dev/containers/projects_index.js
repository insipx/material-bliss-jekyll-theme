import React, { Component } from 'react';

import { connect } from 'react-redux';

import _ from 'lodash';

import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Masonry from 'react-masonry-component';

import { fetchProjects, fetchSiteInfo } from '../actions/index';

class ProjectsIndex extends Component {

  componentWillMount() {
    this.props.fetchProjects();
  }
  getMedia = (project) => {
      if (project.image) {
        return (
          <CardMedia
            overlay={<CardTitle title="Cool Project" subtitle="hellya" />}
          >
            <img role="presentation" src={`${this.props.config.url}/${project.image}`} />
        </CardMedia >
        );
      }
      return;
  }
  getAuthorHeader = (project) => {
      if (project.author && project.author_tag && project.avatar) {
        return (
          <CardHeader title={project.author} subtitle={project.author_tag} avatar={this.props.config.avatar} />
        );
      }
      return;
  }

  renderProjects() {
    return this.props.projects[1].map((project) => (
        <div className="masonry-content" key={project.title}>
          <Card>
              {this.getAuthorHeader(project)}
              {this.getMedia(project)}
            <CardTitle title={project.title} subtitle={project.subtitle} />
            <CardText> {project.description} </CardText>
          </Card>
        </div>
      ));
  }

  render() {
    if (_.isEmpty(this.props.projects) || !this.props.config) {
      return (
        <div />
      );
    }
    return (
      <div className="masonry-wrapper">
        <Masonry>
          {this.renderProjects()}
      </Masonry>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects.all,
    config: state.siteInfo.all,
  };
}

export default connect(mapStateToProps, { fetchProjects, fetchSiteInfo })(ProjectsIndex);
