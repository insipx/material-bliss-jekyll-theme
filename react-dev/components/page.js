import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


export const Page = (props) => (
  <Paper className="paper-wrapper">
    <article className="post">
      <header className="post-header">
        {props.title}
      </header>
      <p>
        {props.content}
      </p>
    </article>
  </Paper>
);

/*Page.propTypes = {
  content: React.PropTypes.string.isRequired,
  title: React.Proptypes.string.isRequired
};*/
