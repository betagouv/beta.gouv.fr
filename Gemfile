require 'json'
require 'open-uri'

source 'https://rubygems.org'

begin
  versions = JSON.parse(open('https://pages.github.com/versions.json').read)

  # We need to be sure jekyll gets built in CI using the same version
  # than Github does.
  gem 'github-pages', versions['github-pages'], group: :jekyll_plugins

  # The reason to add a ruby version at .ruby-version and here is to prevent
  # the CI server to push to Github if the versions mismatch.
  # see <https://circleci.com/docs/unrecognized-ruby-version/>
  ruby versions['ruby'] if ENV['CI']

rescue => unreachable_versions
  gem 'github-pages'

  if ENV['CI']
    raise unreachable_versions
  else
    puts "\n**Something went wrong trying to parse production versions. Assuming you're offline.**\n\n"
  end
end


gem 'html-proofer', group: :test
