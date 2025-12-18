# frozen_string_literal: true

require 'active_support'
require 'net/http'

# this extension fetches the index of all evaluations done on
# standards.incubateur.net and stores them pre-build so the data can
# be used with the startup page, similar to what the S3 image plugin
# does in `load_s3_images.rb`.
Jekyll::Hooks.register :site, :after_init do |site|
  endpoint = ENV.fetch('STANDARDS_INCUBATEUR_API_ENDPOINT', nil)

  # if we're running local don't bother
  next if endpoint.blank?

  Jekyll.logger.info "Fetching all evaluations from #{endpoint}..."

  site.config['evaluations'] = JSON.parse(Net::HTTP.get(URI(endpoint), { Accept: 'application/json' }))
end
