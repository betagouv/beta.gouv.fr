# frozen_string_literal: true

require 'spec_helper'
require 'ostruct'

describe Jekyll::StartupFilter do
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
              - notifications
        startups:
          - notifications
          - valorisation.des.stages.pro
YAML
  end

  let(:data) { Psych.unsafe_load(yml) }

  let(:member) { instance_double(Jekyll::Document, data:) }

  describe '#members' do
    context 'when asking for current members' do
      subject(:current_members) { template.members([member], 'notifications', false) }

      context 'when the member has an active mission containing the startup' do
        it { is_expected.to contain_exactly member }
      end

      context 'and the member has an inactive mission containing the startup' do
        before do
          data.delete('startups')

          data['missions'] = [{ startups: 'notifications', end: Date.parse('2020-01-01') }]
        end

        it { is_expected.to be_empty }
      end
    end

    context 'when asking for alumni members' do
      subject(:alumni_members) { template.members([member], 'notifications', true) }

      context 'and the member has an inactive mission containing the startup' do
        before do
          data['missions'].first['end'] = Date.parse('2000-01-01')
        end

        it { is_expected.to contain_exactly member }
      end

      context 'and the member has a legacy startup' do
        before { data['previously'] = ['notifications'] }

        it { is_expected.to contain_exactly member }
      end
    end
  end
end
