# frozen_string_literal: true
require 'yaml'

module Beta
  class Base
    class << self
      def all
        @all ||= fetch_all
      end

      private

      def fetch_all
        Dir
          .glob(File.expand_path("content/#{self::FOLDER_IDENTIFIER}/**.md", Dir.pwd))
          .map { |file| Psych.unsafe_load_file(file) }
          .map { |data| new(data) }
      end
    end
  end
end
