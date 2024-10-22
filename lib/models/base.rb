# frozen_string_literal: true

require 'yaml'

module Beta
  # Base is a support class for all of our business classes (Member,
  # Startup) which mainly provide class-level accessors to read and
  # instantiate all the files in the "FOLDER_IDENTIFIER" of the child
  # class.
  class Base
    class << self
      def all
        @all ||= fetch_all
      end

      private

      def fetch_all
        Dir
          .glob(File.expand_path("content/#{self::FOLDER_IDENTIFIER}/**.md", Dir.pwd))
          .map { |file| [file, Psych.unsafe_load_file(file)] }
          .map { |filename, data| [File.basename(filename, '.*'), data] }
          .map { |id, data| new(data.merge('id' => id)) }
      end
    end
  end
end
