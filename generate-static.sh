#!/bin/bash

NODE_ENV=development node_modules/.bin/babel-node --presets 'react,es2015' react-dev/render_to_file.js
# sed -i '1 i\---\nlayout: default\n---' src/_layouts/post.html 



staticHTML=( "src/_layouts/post.html" )

# add --- layout: default to frontmatter
# React doesn't do front matter very well

for i in "${staticHTML[@]}"
do
  sed -i '1 i\---\nlayout: default\n---' $i
done
