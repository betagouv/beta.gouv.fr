# frozen_string_literal: true

require 'spec_helper'

describe Jekyll::RenderCommunityStatsTag do
  subject(:tag) do
    described_class.allocate.tap { |t| t.instance_variable_set(:@input, 'total') }
  end

  let(:context) do
    authors = Struct.new(:docs).new(members)
    site = Struct.new(:collections).new({ 'authors' => authors })

    Liquid::Context.new({}, {}, { site: site })
  end

  let(:active) { member_with(end_date: Date.today.next) }
  let(:alum) { member_with(end_date: Date.today.prev_day) }
  let(:members) { [active, alum] }

  def member_with(end_date:)
    Struct.new(:data).new(
      {
        'domaine' => 'Développement',
        'missions' => [
          { 'start' => Date.new(2020), 'end' => end_date, 'status' => 'independent' }
        ]
      }
    )
  end

  it 'counts the members with an active mission' do
    expect(tag.render(context)).to eq 1
  end

  context 'when the active mission is not the last one in the missions array' do
    before do
      alum.data['missions'].prepend(
        'start' => Date.new(2024), 'end' => Date.today.next, 'status' => 'independent'
      )
    end

    it 'still counts the member' do
      expect(tag.render(context)).to eq 2
    end
  end
end
