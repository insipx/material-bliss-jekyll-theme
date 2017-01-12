import React, { Component } from 'react';

import { connect } from 'react-redux';

import _ from 'lodash';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';

import { fetchProjects, fetchSiteInfo } from '../actions/index';

class ProjectsIndex extends Component {

  componentWillMount() {
    this.props.fetchProjects();
  }

  renderProjects() {
    return this.props.projects[1].map((project) => {
      return (
        <Col xs={3} md={3} key={project.title}>
          <Card>
            <CardMedia overlay={<CardTitle title="Cool Project" subtitle="yep. that cool." />} >
               <img role="presentation" src={`${this.props.config.url}/${project.image}`} />
            </CardMedia>
            <CardTitle title={project.title} subtitle={project.subtitle} />
            <CardText> {project.description} </CardText>
          </Card>
        </Col>
      );
    });
  }

  render() {
    if (_.isEmpty(this.props.projects) || !this.props.config) {
      return (
        <div />
      );
    }
    return (
      <Grid>
        <Row>
          <Col xs={3} md={3} >
            <Card>
              <CardHeader title="Andrew Plaza" subtitle="You can also format it like this!" avatar={this.props.config.avatar} />
              <CardTitle title="Card Title" subtitle="Card subtitle" />
              <CardText>
                Project Excerpt....Yayy! Something about my project that is really cool!
              </CardText>
            </Card>
          </Col>
          {this.renderProjects()}
          <Col xs={3} md={3}>
            <Card>
              <CardHeader
                title="Linus Torvalds"
                subtitle="Or even like this "
                avatar={this.props.config.avatar}
              />
              <CardMedia
                overlay={<CardTitle title="Cool Project" subtitle="yep. that cool." />}
              >
              <img
                role="presentation"
                src={`${this.props.config.url}/static/img/placeholder.jpg`}
              />
             </CardMedia>
              <CardTitle title="Card Title" subtitle="Card subtitle" />
              <CardText>
                Project Excerpt....Yayy! Something about my project that is really cool!
              </CardText>
            </Card>
          </Col>
        </Row>
      </Grid>
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
