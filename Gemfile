source 'https://rubygems.org'

if ENV['CI']
  require 'json'
  require 'net/http'

  # We assume Internet connectivity in the context of a CI server
  # (therefore, no need to catch exceptions)
  uri      = URI('https://pages.github.com/versions.json')
  versions = JSON.parse(Net::HTTP.get(uri))

  gem 'html-proofer', group: :test

  # We need to be sure jekyll gets built in CI using the same version
  # than Github does.
  gem 'github-pages', versions['github-pages'], group: :jekyll_plugins

  # The reason to add a ruby version at .ruby-version and here is to prevent
  # the CI server to push to Github if the versions mismatch.
  # see <https://circleci.com/docs/unrecognized-ruby-version/>
  ruby versions['ruby']
else
  gem 'github-pages'
end