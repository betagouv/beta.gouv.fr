# frozen_string_literal: true

require 'spec_helper'

require_relative '../../../lib/beta_dsl'

describe BetaDsl::Startup, type: :dsl do
  let(:title) { 'Test Startup' }
  let(:phases) { [] }

  let(:payload) { { 'title' => title, 'phases' => phases } }

  subject { described_class.new(payload) }

  it { is_expected.to have_attributes title: 'Test Startup' }
  it { is_expected.to have_attributes phases: [] }

  describe 'active?' do
    [
      [%w[investigation], true],
      [%w[investigation construction], true],
      [%w[investigation construction acceleration], true],
      [%w[investigation construction acceleration transfer], true],
      [%w[investigation construction acceleration transfer success], true],
      [%w[investigation construction acceleration transfer success alumni], false]
    ].each do |phases, is_active|
      context "with phases #{phases.join(', ')}" do
        let(:phases) do
          phases.map { |p| [['name', p]].to_h }
        end

        if is_active
          it { is_expected.to be_active }
        else
          it { is_expected.not_to be_active }
        end
      end
    end
  end

  describe '.last_phase' do
    let(:investigation) { { start: Date.new(2022, 1), end: Date.new(2022, 2) } }
    let(:construction)  { { start: Date.new(2022, 2), end: Date.new(2022, 3) } }
    let(:transfer)      { { start: Date.new(2022, 4) } }

    context 'when there is no ongoing phase' do
      let(:phases) { [construction, investigation] }

      it 'gives the last chronological phase' do
        expect(subject.last_phase).to eq investigation
      end
    end

    context 'when there is an ongoing phase' do
      let(:phases) { [construction, investigation, transfer] }

      it 'gives the ongoing phase' do
        expect(subject.last_phase).to eq transfer
      end
    end
  end

  BetaDsl::Startup::PHASES.each do |phase|
    it { is_expected.to respond_to "#{phase}_phase" }
    it { is_expected.to respond_to "#{phase}_phase?" }
  end
end
