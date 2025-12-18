# frozen_string_literal: true

require 'spec_helper'

describe Jekyll::BetaGouv::HumanizeFilter do
  matrix = {
    'foo bar' => 'Foo bar',
    'foo_bar' => 'Foo bar',
    'foo-bar-baz' => 'Foo bar baz',
    'foo_bar-baz bat man' => 'Foo bar baz bat man'
  }

  matrix.each do |str, human|
    it "formats '#{str}' into '#{human}'" do
      expect(template.humanize(str)).to eq human
    end
  end
end
