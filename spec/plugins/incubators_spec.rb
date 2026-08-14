# frozen_string_literal: true

require 'spec_helper'

require_relative '../../lib/models/startup'

StartupDocument = Struct.new(:relative_path, :data)
IncubatorPage = Struct.new(:id)

def startup_document(id, incubator:, incubators: nil, phase: 'construction')
  data = {
    'incubator' => incubator,
    'phases' => [{ 'name' => phase, 'start' => Date.new(2024, 1, 1) }]
  }
  data['incubators'] = incubators if incubators

  StartupDocument.new("_startups/#{id}.md", data)
end

describe Jekyll::ActiveStartupsFilter do
  let(:mono) { startup_document('mono', incubator: 'dinum') }
  let(:co_incubated) { startup_document('ecopass', incubator: 'mtes', incubators: %w[mtes ademe]) }

  describe '#where_incubator' do
    it 'matches a product on its single incubator' do
      expect(template.where_incubator([mono, co_incubated], 'dinum')).to eq [mono]
    end

    it 'matches a co-incubated product on its historical incubator' do
      expect(template.where_incubator([mono, co_incubated], 'mtes')).to eq [co_incubated]
    end

    it 'matches a co-incubated product on its additional incubator' do
      expect(template.where_incubator([mono, co_incubated], 'ademe')).to eq [co_incubated]
    end

    it 'returns nothing for an incubator without any product' do
      expect(template.where_incubator([mono, co_incubated], 'anct')).to be_empty
    end
  end

  describe '#count_incubator_active_startups' do
    let(:ademe) { IncubatorPage.new('/incubateurs/ademe') }
    let(:mtes) { IncubatorPage.new('/incubateurs/mtes') }

    it 'counts a co-incubated product under its historical incubator' do
      expect(template.count_incubator_active_startups(mtes, [mono, co_incubated])).to eq 1
    end

    it 'counts a co-incubated product under its additional incubator' do
      expect(template.count_incubator_active_startups(ademe, [mono, co_incubated])).to eq 1
    end

    it 'ignores a co-incubated product that is no longer active' do
      stopped = startup_document('arrete', incubator: 'mtes', incubators: %w[mtes ademe], phase: 'abandon')

      expect(template.count_incubator_active_startups(ademe, [stopped])).to eq 0
    end
  end
end
