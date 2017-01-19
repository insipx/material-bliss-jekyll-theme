import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


import { blueGrey800, grey50, teal900, green900, green500, teal500, cyan500 } from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//it's safe to use dangerouslySetInnerHTML because all components under /pages
//are going to be statically generated and placed in a position for Jekyll to use

const muiTheme = getMuiTheme(darkBaseTheme, {
  palette: {
    primary1Color: blueGrey800,
    primary2Color: green900,
    primary3Color: teal900,
    accent1Color: green500,
    accent2Color: teal500,
    accent3Color: cyan500,
    textColor: grey50,
    alternateTextColor: grey50, //color on header
    //pickerHeaderColor: grey900
  },
  appBar: {
    height: 100
  },
  });

class Post extends Component {

  createMarkup(markup) {
    return { __html: markup };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="single-post-content" id="single-post-content">
          <Paper zDepth={4} className="paper-wrapper" id="post-static-content">
          <article className="post" itemScope itemType="http://schema.org/BlogPosting">

            <header className="post-header">
            <h1 className="post-title" itemProp="name headline">{'{{ page.title }}'}</h1>

            <p className="post-meta">
              <time
                dateTime="{`{{ page.date | date_to_xmlschema }}`}" itemProp="datePublished"
              dangerouslySetInnerHTML={this.createMarkup("{{ page.date | date: '%b %-d, %Y'}}")}
              />
              {'{% if page.author %}'} • <span itemProp="author" itemScope itemType="http://schema.org/Person"><span itemProp="name">{'{{ page.author }}'}</span></span>{'{% endif %}'}</p>
            </header>
            <div className="post-content" itemProp="articleBody">
              {'{{ content }}'}
            </div>
          </article>
        </Paper>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default Post;
