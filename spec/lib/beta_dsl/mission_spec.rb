# frozen_string_literal: true

require 'spec_helper'

require_relative '../../../lib/beta_dsl'

describe BetaDsl::Mission, type: :dsl do
  let(:start_date) {}
  let(:end_date) {}
  let(:payload) { { 'start' => start_date, 'end' => end_date } }

  subject { described_class.new(payload) }

  it { is_expected.to have_attributes start: nil }
  it { is_expected.to have_attributes end: nil }

  describe 'active?' do
    context 'when it has no end' do
      let(:end_date) {}

      it { is_expected.to be_active }
    end

    context 'when it has an end date in the future' do
      let(:end_date) { Date.today.next }

      it { is_expected.to be_active }
    end

    context 'when it has an end date in the past' do
      let(:end_date) { Date.today.prev_day }

      it { is_expected.to_not be_active }
    end
  end
end
