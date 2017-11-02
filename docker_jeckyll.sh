#!/bin/bash
# -*- coding: UTF8 -*-

docker images | grep -q jekyll_make
if [ $? -ne 0 ];
then
  docker build -t jekyll_make . 
fi
docker run --rm --volume=$(pwd):/srv/jekyll -it -p 127.0.0.1:4000:4000 jekyll_make jekyll serve --drafts --watch
