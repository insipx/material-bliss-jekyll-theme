import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import AutoComplete from 'material-ui/AutoComplete';

import { fetchPosts } from '../actions';

class SearchBar extends Component {

  getSearchBarWidth() {
    const width = this.props.getMenuWidth();
    if (width === 400) return 200;
    else if (width === 350) return 175;
    else if (width === 300) return 150;
    else if (width === 256) return 125;
  }

  styles = {
    root: {
      width: this.getSearchBarWidth(),
    },
    textField: {
      width: this.getSearchBarWidth(),
    }
  }

  handleClick() {
    const toggleBox = document.getElementById('search-form-auto');
    if (!toggleBox) {
      return;
    }
    toggleBox.classList.toggle('search-hidden');
  }

  handleNewRequest = (term, index) => {
    this.props.fetchPosts(term);
  }

  handleUpdateInput = (term, data, params) => {
    const debFetch = _.debounce(this.props.fetchPosts, 400);
    debFetch(term);
  }

  postTitles = () => {
    if (_.isEmpty(this.props.posts)) {
      return [];
    }
    return this.props.posts.map(post => post.title);
  }

  render() {
    if (this.props.location.pathname !== '/') {
      return <div />;
    }
    return (
      <div id="container">
          <div id='search-form-auto' className="search-hidden" style={{ float: 'left', }}>
            <AutoComplete
              hintText="Enter Search..."
              filter={AutoComplete.fuzzyFilter}
              dataSource={this.postTitles()}
              maxSearchResults={5}
              style={this.styles.root}
              textFieldStyle={this.styles.textField}
              onNewRequest={this.handleNewRequest}
              onUpdateInput={this.handleUpdateInput}
            />
          </div>
          <IconButton
            iconClassName="zmdi zmdi-search"
            tooltip="Search"
            tooltipPosition="bottom-center"
            touch
            onTouchTap={this.handleClick}
          />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    posts: state.posts.all,
  };
}

export default connect(mapStateToProps, { fetchPosts })(SearchBar);
