#!/bin/bash
bundle exec jekyll serve
NODE_ENV=production node_modules/.bin/babel-node --presets 'react,es2015' react-dev/render_to_file.js
