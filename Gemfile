# frozen_string_literal: true

source 'https://rubygems.org'

ruby '3.3.4'

gem 'base64'
gem 'csv'
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

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

# Performance-booster for watching directories on Windows
gem 'wdm', '~> 0.1.0' if Gem.win_platform?
