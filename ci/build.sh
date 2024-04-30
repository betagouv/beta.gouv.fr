#!/bin/bash
#
# This build script, prepare a local dev environment
# this steps are described in .github/workflows/tests.yml
#
set -euo pipefail

echo "# Install dependencies"
time npm install
time bundle check || bundle install --path vendor/bundle

time bundle exec jekyll doctor

echo "# Build"
time bundle exec jekyll build --trace -V
