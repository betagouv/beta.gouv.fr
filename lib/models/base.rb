# frozen_string_literal: true

require 'active_model'
require 'yaml'

module Beta
  # Base is a support class for all of our business classes (Member,
  # Startup) which mainly provide class-level accessors to read and
  # instantiate all the files in the "FOLDER_IDENTIFIER" of the child
  # class.
  class Base
    # points to an actual Jekyll document when initialized with one
    attr_reader :document

    include ActiveModel::AttributeAssignment

    class << self
      # `interesting_attributes` is a list of attributes that are
      # relevant in our files, for which we're willing to define
      # accessors. Before this we used OpenStruct but OpenStruct
      # declares a method for every single hash key-value pair it is
      # instantiated with – which is quite heavy especially when we
      # have to do it for 2K+ members/startups/etc.
      attr_reader :interesting_attributes

      def interesting(*attrs)
        @interesting_attributes ||= []

        attrs.each do |attr|
          attr_accessor attr

          @interesting_attributes << attr
        end
      end

      def all
        @all ||= fetch_all
      end

      def from_document(document)
        id = File.basename(
          document.relative_path.delete_prefix(self::FOLDER_IDENTIFIER),
          '.md'
        )

        new(document.data.merge('id' => id)).tap do |klass|
          klass.instance_eval do
            @document = document
          end
        end
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

    def initialize(hash)
      attributes = self.class.interesting_attributes

      assign_attributes(hash.slice(*attributes.map(&:to_s)))
    end
  end
end
