# frozen_string_literal: true

require 'date'
require 'ostruct'
require 'yaml'

module BetaDsl
  class Base < ::OpenStruct
    class << self
      # defines a class macro `folder 'string'` to designate where to
      # find backing files for the inheriting classes.
      def folder(name)
        @folder = name
      end

      def all
        @all ||= fetch_all
      end

      private

      def fetch_all
        files = Dir.glob(File.expand_path("content/#{@folder}/**.md", Dir.pwd))

        files.map do |file|
          payload = YAML.unsafe_load_file(file)
          id = File.basename(file, '.md')

          new(payload.merge(id: id))
        end
      end
    end
  end
end
