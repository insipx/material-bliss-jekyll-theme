import React, { Component } from 'react';
//it's safe to use dangerouslySetInnerHTML because all components under /pages
//are going to be statically generated and placed in a position for Jekyll to use

class Post extends Component {

  createMarkup(markup) {
    return { __html: markup };
  }

  render() {
    return (
      <article className="post" itemScope itemType="http://schema.org/BlogPosting">

        <header className="post-header">
        <h1 className="post-title" itemProp="name headline">{`{{ page.title }}`}</h1>

        <p className="post-meta">
          <time dateTime="{`{{ page.date | date_to_xmlschema }}`}" itemProp="datePublished"
          dangerouslySetInnerHTML={this.createMarkup("{{ page.date | date: '%b %-d, %Y'}}")}
          />
          {`{% if page.author %}`} • <span itemProp="author" itemScope itemType="http://schema.org/Person"><span itemProp="name">{`{{ page.author }}`}</span></span>{`{% endif %}`}</p>
        </header>
        <div className="post-content" itemProp="articleBody">
          {`{{ content }}`}
        </div>
      </article>
    );
  }
}

export default Post;
