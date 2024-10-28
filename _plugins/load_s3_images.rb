# frozen_string_literal: true

require 'active_support'
require 'aws-sdk-s3'

# this extension picks up our new datasource for members/startups
# images, which are hosted on an S3 bucket. Instead of making
# individual requests we fetch everything before the first build and
# store it in a config object to decide (plugins/images.rb) whether we
# use S3, GitHub or a default placeholder to load the image.
Jekyll::Hooks.register :site, :after_init do |site|
  # if we're running local don't bother
  next if ENV['AWS_ACCESS_KEY_ID'].blank?

  client = Aws::S3::Client.new

  Jekyll.logger.info 'Fetching S3 assets...'

  site.config['s3_keys'] = client.list_objects(bucket: 'espace-membre').contents.map(&:key)

  Jekyll.logger.info "Saved #{site.config['s3_keys'].length} S3 keys into the site config."
end
