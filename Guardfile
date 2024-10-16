# frozen_string_literal: true

# More info at https://github.com/guard/guard#readme

guard :rspec, cmd: 'bundle exec rspec' do
  require 'guard/rspec/dsl'
  dsl = Guard::RSpec::Dsl.new(self)

  # RSpec files
  rspec = dsl.rspec
  watch(rspec.spec_helper) { rspec.spec_dir }
  watch(rspec.spec_support) { rspec.spec_dir }
  watch(rspec.spec_files)

  # RSpec for lib files
  watch(%r{^lib/(.+)\.rb$}) { |m| "spec/lib/#{m[1]}_spec.rb" }

  # Watch Jekyll plugins
  watch(%r{^_plugins/(.+)\.rb$}) { |m| "spec/plugins/#{m[1]}_spec.rb" }

  # Ruby files
  ruby = dsl.ruby
  dsl.watch_spec_files_for(ruby.lib_files)
end
