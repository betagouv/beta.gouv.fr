# frozen_string_literal: true

require 'spec_helper'
require 'active_support/core_ext/date/calculations'

require_relative '../../../lib/models/startup'
require_relative '../../../lib/models/member'

describe Beta::Startup do
  subject(:startup) { described_class.new(data) }

  let(:yml) do
    <<YAML
  id: tartines
  title: Tartines
  incubator: dinum
  mission: Réparer le monde
  phases:
    - name: investigation
      start: 2023-12-22
    - name: construction
      start: 2024-01-01
YAML
  end

  let(:data) { Psych.unsafe_load(yml) }

  %w[title phases mission incubator].each do |attr|
    it "defines and updates a '#{attr}' attribute" do
      expect(startup.public_send(attr)).not_to be_nil
    end
  end

  describe 'phases' do
    it 'can retrieve a specific phase' do
      expect(startup.investigation_phase).to be_present
    end

    context "when the phase isn't present" do
      it 'returns nil' do
        expect(startup.acceleration_phase).to be_nil
      end
    end

    it 'can tell which phase is active' do
      expect(startup).to be_in_construction
    end

    it "doesn't use the end date to figure out the active phase" do
      expect(startup).not_to be_in_acceleration
    end
  end

  describe 'members' do
    let(:member) { instance_double(Beta::Member) }

    before do
      allow(Beta::Member).to receive(:all).and_return [member]
    end

    context 'when there is a member with a matching active startup' do
      before { allow(member).to receive(:active_startups).and_return(['tartines']) }

      it 'returns it' do
        expect(startup.members).to contain_exactly member
      end
    end

    context 'when the member is an alumni' do
      before { allow(member).to receive(:active_startups).and_return([]) }

      it "doesn't return it" do
        expect(startup.members).to be_empty
      end
    end
  end
end
