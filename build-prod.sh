#!/bin/bash
npm install &&
bundle install &&
bundle update &&
npm run build &&
sh ./generate-static.sh &&
bundle exec jekyll build
