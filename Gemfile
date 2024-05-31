source "https://rubygems.org"

ruby "3.3.1"

gem "jekyll", "~> 4.0"

group :jekyll_plugins do
  gem 'jekyll-redirect-from'
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

gem 'rake', group: [:default, :test]

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?
