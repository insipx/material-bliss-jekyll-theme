import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import { connect } from 'react-redux';

import { fetchSiteInfo } from '../actions/index';
import { SocialMediaList } from './social_media_list';


class Footer extends Component {
  componentWillMount() {
    this.props.fetchSiteInfo();
  }

  render() {
    return (
    <Paper zDepth={3}>
      <footer className="site-footer">
        <div className="wrapper">
          <div className="footer-col-wrapper">
            <div className="footer-col footer-col-1">
              <ul className="contact-list">
                <li>{this.props.config.title}</li>
                <li><a href={`mailto:${this.props.config.email}`}>{this.props.config.email}</a></li>
              </ul>
            </div>
            <div className="footer-col footer-col-2">
              <SocialMediaList social={this.props.config.social} />
          </div>
          <div className="footer-col footer-col-3">
            {this.props.config.description}
          </div>
        </div>
      </div>
      </footer>
    </Paper>
    );
  }
}

function mapStateToProps(state) {
  return { config: state.siteInfo.all };
}

export default connect(mapStateToProps, { fetchSiteInfo })(Footer);
