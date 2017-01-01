import React, { Component } from 'react';


export default class Post extends Component {


  createMarkup(markup) {
    return { __html: `${markup}` }
  }
  render() {
    return (
      <article className="post" itemScope itemType="http://schema.org/BlogPosting">

        <header class="post-header">
        <h1 className="post-title" itemProp="name headline">
          dangerouslySetInnerHTML={this.createMarkup(`{{page.title}}`)}</h1>
        <p className="post-meta"><time dateTime="{`{{ page.date | date_to_xmlschema }}`}" itemProp="datePublished">{`{{ page.date | date: '%b %-d, %Y' }}`}</time>{`{% if page.author %}`} • <span itemProp="author" itemScope itemType="http://schema.org/Person"><span itemProp="name">{`{{ page.author }}`}</span></span>{`{% endif %}`}</p>
        </header>

        <div className="post-content" itemProp="articleBody">
          {`{{ content }}`}
        </div>

      </article>
    );
  }
}
