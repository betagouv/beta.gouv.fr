# frozen_string_literal: true

require 'spec_helper'
require 'active_support/core_ext/date/calculations'

require_relative '../../../lib/models/startup'
require_relative '../../../lib/models/member'

ApiDocument = Struct.new(:relative_path, :data, :content)

describe Beta::Startup do
  subject(:startup) { described_class.new(data) }

  let(:yml) do
    <<YAML
  id: tartines
  title: Tartines
  incubator: dinum
  mission: Réparer le monde
  phases:
    - name: construction
      start: 2024-01-01
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

  describe '#latest_phase' do
    it 'uses the start date to figure out the active phase' do
      expect(startup.latest_phase['name']).to eq 'construction'
    end
  end

  describe 'incubators' do
    let(:co_incubated_yml) do
      <<YAML
  id: ecopass
  title: Ecopass
  incubator: mtes
  incubators: [mtes, ademe]
  phases:
    - name: construction
      start: 2024-01-01
YAML
    end

    let(:co_incubated) { described_class.new(Psych.unsafe_load(co_incubated_yml)) }

    describe '#incubator_ids' do
      it 'falls back to the single incubator when the product is not co-incubated' do
        expect(startup.incubator_ids).to eq %w[dinum]
      end

      it 'returns every incubator of a co-incubated product' do
        expect(co_incubated.incubator_ids).to eq %w[mtes ademe]
      end

      it 'returns nothing when the product has no incubator at all' do
        orphan = described_class.new(Psych.unsafe_load(yml.sub('incubator: dinum', 'title: Orphelin')))

        expect(orphan.incubator_ids).to be_empty
      end
    end

    describe '#to_api_hash' do
      before { allow(Beta::Member).to receive(:all).and_return [] }

      def api_hash_for(source)
        document = ApiDocument.new('_startups/produit.md', Psych.unsafe_load(source), '')

        described_class.from_document(document).to_api_hash
      end

      it 'exposes a list even for a product with a single incubator' do
        expect(api_hash_for(yml)[:incubators]).to eq %w[dinum]
      end

      it 'exposes every incubator of a co-incubated product' do
        expect(api_hash_for(co_incubated_yml)[:incubators]).to eq %w[mtes ademe]
      end

      it 'keeps the historical incubator alongside the list' do
        expect(api_hash_for(co_incubated_yml)['incubator']).to eq 'mtes'
      end
    end

    describe '#incubated_by?' do
      it 'matches the single incubator' do
        expect(startup).to be_incubated_by('dinum')
      end

      it 'matches the historical incubator of a co-incubated product' do
        expect(co_incubated).to be_incubated_by('mtes')
      end

      it 'matches the additional incubator of a co-incubated product' do
        expect(co_incubated).to be_incubated_by('ademe')
      end

      it 'does not match an unrelated incubator' do
        expect(co_incubated).not_to be_incubated_by('anct')
      end
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
