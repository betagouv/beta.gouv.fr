# frozen_string_literal: true

require 'spec_helper'
require 'active_support/core_ext/date/calculations'

require_relative '../../../lib/models/startup'

describe Beta::Startup do
  subject(:startup) { described_class.new(data) }

  let(:yml) do
    <<YAML
  title: Tartines
  incubator: dinum
  mission: Réparer le monde
  phases:
    - name: investigation
      start: 2023-12-22
YAML
  end

  let(:data) { Psych.unsafe_load(yml) }

  %w[title phases mission incubator].each do |attr|
    it "defines and updates a '#{attr}' attribute" do
      expect(startup.public_send(attr)).not_to be_nil
    end
  end
end
