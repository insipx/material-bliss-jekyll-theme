import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { html_beautify } from 'js-beautify';
import fs from 'fs-extra';

import Post from './pages/post';

class renderStatic {
  constructor(template, file) {
    this.template = template;
    this.file = file;
  }

  createMarkup() {
    return { __html: renderToStaticMarkup(this.template) }
  }
  renderStatic() {
    const html = html_beautify(dangerouslySetInnerHTML(createMarkup()));
    fs.outputFile(file, html, (err) => {
      console.log(err);
    });
  }


}


function renderStatic(template, file) {
  const html = html_beautify(renderToStaticMarkup(dangerouslySetInnerHTML(template)));
  fs.outputFile(file, html, (err) => {
    console.log(err);
  });
}

renderStatic(<Post />, './src/_layouts/post.html');
