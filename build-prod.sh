#!/bin/bash
bundle install &&
npm install &&
npm run build &&
sh ./generate-static.sh & 
bundle exec jekyll serve
