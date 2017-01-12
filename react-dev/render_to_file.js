import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { html_beautify } from 'js-beautify';
import fs from 'fs-extra';

import Post from './pages/post';
import Default from './pages/default';

function renderStatic(template, file) {
    const html = html_beautify(renderToStaticMarkup(template));
    fs.outputFile(file, html, (err) => {
      console.log(err);
    });
}

renderStatic(<Post />, './src/_layouts/post.html');
renderStatic(<Default />, './src/_layouts/default.html');
