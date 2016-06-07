require 'json'
require 'net/http'

source 'https://rubygems.org'

begin
  uri      = URI('https://pages.github.com/versions.json')
  versions = JSON.parse(Net::HTTP.get(uri))

  # We need to be sure jekyll gets built in CI using the same version
  # than Github does.
  gem 'github-pages', versions['github-pages'], group: :jekyll_plugins

  # The reason to add a ruby version at .ruby-version and here is to prevent
  # the CI server to push to Github if the versions mismatch.
  # see <https://circleci.com/docs/unrecognized-ruby-version/>
  ruby versions['ruby'] if ENV['CI']

# If for some reason the production versions check fails, we need to provide
# a fallback scenario to the user.
rescue Exception => exception
  # Halt execution immediatly if CI server run.
  raise exception if ENV['CI']

  # We try to use whatever version is already installed.
  gem 'github-pages'

  message = String.new.tap do |message|
    # We warn the user if we believe she's offline.
    if exception.is_a?(SocketError)
      message << "\nWe couldn't reach #{uri.to_s}, we assume you're offline."
    # Otherwise invite her to report the incident by opening an issue.
    else
      message << "\nSomething went wrong trying to parse production versions."
      message << "\nPlease report the incident at https://github.com/sgmap/beta.gouv.fr/issues:"
      message << "\n"
      message << "\n\tException name:    #{exception.class.name}"
      message << "\n\tException message: #{exception.message}"
      message << "\n"
    end

    # In any case, let the user know we're providing a fallback strategy.
    message << "\nAs a fallback, we're using whatever version of 'github-pages' you've already installed.\n\n"
  end

  puts message
end

gem 'html-proofer', group: :test
