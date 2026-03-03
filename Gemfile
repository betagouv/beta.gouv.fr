# frozen_string_literal: true

source 'https://rubygems.org'

ruby file: '.ruby-version'

gem 'base64'
gem 'csv'
gem 'google-protobuf'
gem 'jekyll'

gem 'activemodel'

gem 'aws-sdk-s3'

group :jekyll_plugins do
  gem 'jekyll-redirect-from'
end

group :test, :development do
  gem 'rubocop'
  gem 'rubocop-rake'
  gem 'rubocop-rspec'
end

group :test do
  gem 'debug'
  gem 'guard'
  gem 'guard-rspec'
  gem 'html-proofer'
  gem 'jsonlint'
  gem 'kwalify'
  gem 'opengraph_parser'
  gem 'rspec'
end

gem 'rake', group: %i[default test]

if Gem.win_platform?
  gem 'tzinfo-data'
  gem 'wdm', '~> 0.1.0'
end
