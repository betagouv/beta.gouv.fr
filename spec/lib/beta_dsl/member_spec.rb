# frozen_string_literal: true

require 'spec_helper'

require_relative '../../../lib/beta_dsl'

describe BetaDsl::Member, type: :dsl do
  let(:missions) { [] }

  let(:payload) { { 'missions' => missions } }

  subject { described_class.new(payload) }

  it { is_expected.to have_attributes missions: [] }

  describe 'active?' do
    context 'when it has no missions' do
      let(:missions) { [] }

      it { is_expected.to_not be_active }
    end

    context 'when is has an active mission' do
      let(:missions) { [{ 'start' => Date.today }] }

      it { is_expected.to be_active }
    end

    context 'when it has no active mission' do
      let(:missions) { [{ 'end' => Date.today.prev_day }] }

      it { is_expected.not_to be_active }
    end
  end
end
