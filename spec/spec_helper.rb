# frozen_string_literal: true

require 'debug'
require 'jekyll'

plugins = Dir.glob('./_plugins/**.rb')
plugins.each { |p| require p }

RSpec.shared_context 'plugins' do
  subject(:template) do
    Object.new.extend(described_class)
  end
end

RSpec.configure do |config|
  config.shared_context_metadata_behavior = :apply_to_host_groups

  # mark all `spec/plugins` files with type :jekyll_plugin
  config.define_derived_metadata(file_path: Regexp.new('/spec/plugins/')) do |metadata|
    metadata[:type] = :jekyll_plugin
  end

  # and make the described Jekyll plugin available via the shared context
  config.include_context('plugins', type: :jekyll_plugin)
end
