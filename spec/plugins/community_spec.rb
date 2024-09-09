# frozen_string_literal: true

require 'spec_helper'
require 'ostruct'

def member_with(name:, end_date: nil, start_date: nil)
  OpenStruct.new(
    data: {
      'fullname' => name,
      'missions' => [
        {
          'start' => start_date,
          'end' => end_date
        }
      ]
    }
  )
end

describe Jekyll::CommunityFilter do
  let(:no_end) do
    member_with(
      name: 'Alphonse',
      start_date: Date.new(2000)
    )
  end

  let(:with_end) do
    member_with(
      name: 'Bernard',
      end_date: Date.today.next,
      start_date: Date.new(2001)
    )
  end

  let(:alum) do
    member_with(
      name: 'Celia',
      end_date: Date.today.prev_day
    )
  end

  let(:members) { [no_end, with_end, alum] }

  it 'can tell current members' do
    current = template.community(members, 'current')

    expect(current).to contain_exactly(with_end, no_end)
  end

  it 'can tell past members' do
    past = template.community(members, 'past')

    expect(past).to contain_exactly alum
  end

  it 'sorts them by newest mission start by default' do
    expect(template.community(members, 'current')).to start_with(with_end)
  end

  it 'can sort them by name' do
    expect(template.community(members, 'current', 'alpha')).to start_with(no_end)
  end

  it "can returns a subset of current members with state: 'recent'" do
    members = Array.new(10).map { member_with(name: 'Foobar') }

    expect(template.community(members, 'recent').size).to eq 3
  end
end
