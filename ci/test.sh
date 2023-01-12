#!/bin/bash
#
# This build script, prepare a local dev environment
# this steps are described in .github/workflows/tests.yml
#
set -euo pipefail

echo "# Install dependencies"
time npm install
time bundle check || bundle install --path vendor/bundle

echo "# Unit tests"
time ruby -e "Dir.glob('test/*.rb').each { |f| require File.expand_path(f) }"
time ruby bin/validate schema/authors.yml "content/_authors/*.md"
time ruby bin/validate schema/startups.yml "content/_startups/*.md"

echo "# htmlproofer / jsonlint"
time bundle exec htmlproofer ./_site --assume-extension --check-html --disable-external --empty-alt-ignore --check-img-http
time bundle exec jsonlint _site/api/v*/*.json
