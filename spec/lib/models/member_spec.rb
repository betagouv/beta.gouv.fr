# frozen_string_literal: true

require 'spec_helper'
require 'active_support/core_ext/date/calculations'

require_relative '../../../lib/models/member'

describe Beta::Member do
  subject(:member) { described_class.new(data) }

  let(:yml) do
    <<YAML
        fullname: Marie Curie
        role: Dev
        domaine: Développement
        missions:
          - start: 2022-04-07
            end: 2025-12-31
            employer: DINUM
            startups:
              - aplypro
        startups:
          - notifications
          - valorisation.des.stages.pro
YAML
  end

  let(:data) { Psych.unsafe_load(yml) }

  %w[fullname role domaine missions startups previously].each do |attr|
    it "defines and updates a '#{attr}' attribute" do
      expect(member.public_send(attr)).not_to be_nil
    end
  end

  describe '#active_missions' do
    context 'when the member has an active mission' do
      before { data['missions'][0]['end'] = Date.current.tomorrow }

      it 'is included in active_missions' do
        expect(member.active_missions).to include data['missions'].first
      end

      it 'includes its startups in active_startups' do
        expect(member.active_startups).to include 'aplypro'
      end

      it 'does not modify the original variable' do
        expect { member.active_startups }.not_to change(member.startups, :count)
      end
    end
  end

  describe '#legacy_startups' do
    context 'when the member has an inactive mission' do
      before { data['missions'][0]['end'] = Date.new(2000, 1, 1) }

      it 'is not included in active missions' do
        expect(member.active_missions).to be_empty
      end

      it 'is included in the legacy_startups' do
        expect(member.legacy_startups).to include 'aplypro'
      end

      it 'does not modify the original variable' do
        expect { member.legacy_startups }.not_to change(member.previously, :count)
      end
    end

    context  'when there are legacy-syntax startups' do
      before do
        data['startups'] = %w[foo bar]
        data['previously'] = %w[bat man]
      end

      it 'merges them in active_startups' do
        expect(member.active_startups).to contain_exactly('aplypro', 'foo', 'bar')
      end

      it 'merges them in legacy_startups' do
        expect(member.legacy_startups).to contain_exactly('bat', 'man')
      end
    end
  end
end
