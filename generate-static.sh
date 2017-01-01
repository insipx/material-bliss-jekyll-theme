#!/bin/bash

NODE_ENV=production node_modules/.bin/babel-node --presets 'react,es2015' react-dev/render_to_file.js
sed -i '1 i\ ---\n layout: default \n --- ' src/_layouts/post.html 
