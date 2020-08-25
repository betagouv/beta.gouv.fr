source "https://rubygems.org"

gem "jekyll", "~> 4.1.1"

group :jekyll_plugins do
   gem 'jekyll-redirect-from'
end

group :test do
  gem 'html-proofer'
  gem 'jsonlint'
  gem 'rake'
  gem 'kwalify'
  gem 'opengraph_parser'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?
