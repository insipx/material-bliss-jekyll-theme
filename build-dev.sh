#!/bin/bash
sh ./generate-static.sh &&
bundle exec jekyll serve --config "_config.yml,_config_dev.yml" --incremental
