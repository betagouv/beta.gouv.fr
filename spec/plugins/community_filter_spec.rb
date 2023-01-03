# frozen_string_literal: true

require 'spec_helper'

require 'ostruct'
require 'jekyll'

require_relative '../../_plugins/community'

def make_member_with_end(date)
  missions = []

  missions << { 'end' => date } unless date.nil?

  OpenStruct.new(data: { 'missions' => missions })
end

describe 'CommunityFilter' do
  let(:no_end) { make_member_with_end(nil) }
  let(:with_end) { make_member_with_end(Date.today.next) }
  let(:alum) { make_member_with_end(Date.today.prev_day) }
  let(:members) { [no_end, with_end, alum] }

  let(:template) do
    Class.new(Object) do
      extend Jekyll::CommunityFilter
    end
  end

  it 'can tell current members' do
    current = template.community(members, 'current')

    expect(current).to contain_exactly(with_end, no_end)
  end

  it 'can tell past members' do
    past = template.community(members, 'past')

    expect(past).to contain_exactly alum
  end
end
