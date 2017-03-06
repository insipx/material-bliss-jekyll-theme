import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { html_beautify } from 'js-beautify';
import fse from 'fs-extra';
import _ from 'lodash';

import Post from './pages/post';
import Default from './pages/default';

const files = {
  post: './src/_layouts/post.html' // any files you want to add default layout to
};                                 // add them to this object

function renderStatic(template, file) {
    const html = html_beautify(renderToStaticMarkup(template));
    fse.outputFile(file, html, (err) => {
      console.log(err);
    });
}

renderStatic(<Post />, files.post);
renderStatic(<Default />, './src/_layouts/default.html');

///iterate through files object and add :
//---
//layout: default
//---
//to them
_.forOwn(files, (key, value) => {
  const data = fse.readFileSync(key);
  console.log(key);
  const fd = fse.openSync(key, 'w+');
  const buffer = '---\nlayout: default\n---';
  fse.writeFileSync(fd, buffer); //write layout
  fse.appendFileSync(fd, data);
  //written = fse.writeSync(fd, data, 0, data.length, buffer.length); //append data previously in file
  fse.close(fd);
});

