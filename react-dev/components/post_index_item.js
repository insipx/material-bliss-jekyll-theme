import React from 'react';
import _ from 'lodash';

import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'left',
  },
  chip: {
    margin: 4,
  }
};

const renderChips = (data) => data.map((tag) => (
  <Chip key={tag} style={styles.chip}> {tag} </Chip>));

const createMarkup = (post) => {
  let body = post.body.split(' ');
  body = body.slice(0, 50);
  body = body.join(' ');
  return `${body}...`;
};

const getCategories = (categories) => categories.map((cat) => `${cat} `);

const getDate = (dateString) => {
  const date = new Date(dateString.split(' ')[0]);
  return date.toDateString();
};

const getReadTime = (post) => {
  const count = post.body.split(' ').length;
  const readingTime = (count / 233).toFixed(1);
  return `Reading time ${readingTime} min. Word count: ${count}`;
};

const renderPosts = (props) => _.reverse(props.posts.map((post) => {
  const postLink = `${props.siteInfo.url}${post.url}`;

  return (
    <Paper key={post.title} zDepth={4} className="paper-wrapper" >
      <li key={post.title}>
        <a href={postLink}><strong><h2>{post.title}</h2></strong></a>
        <div className="post-meta">
          <ul>
            <li>
              <time>{getDate(post.meta.date)}</time>
            </li>
            <li className='divider'>/</li>
            <li>{getCategories(post.meta.categories)}</li>
            <li className='divider'>/</li>
            <li>{getReadTime(post)}</li>
          </ul>
        </div>

        <p>{createMarkup(post)}</p>

        <div className="div-container">
          <a href={postLink} >
            <RaisedButton
              label="Read More"
              labelPosition="before"
              secondary
              icon={<FontIcon className="material-icons">&#xE037;</FontIcon>}
              className="raised-button-override"
            />
          </a>
      </div>

      <div style={styles.wrapper}>
        {renderChips(post.meta.tags)}
      </div>
    </li>
  </Paper>
);
}));

export const PostIndexItem = (props) => {
  if (_.isEmpty(props.posts)) {
    return <li> No Results </li>;
  }
  return (
    <ul>
      {renderPosts(props)}
    </ul>
  );
};
