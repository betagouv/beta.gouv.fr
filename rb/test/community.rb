#!/usr/bin/env ruby

require 'rubygems'
require 'bundler'
Bundler.setup

gem 'jekyll'
gem 'minitest'

require 'jekyll'
require 'minitest'
require 'minitest/autorun'
require 'ostruct'

require_relative '../../_plugins/community.rb'

class TestCommunity < MiniTest::Test
  include Jekyll::CommunityFilter

  def test_classify_members
    tomorrow = Date.today.next
    yesterday = Date.today.prev_day

    no_end = {'name' => 'current_without_end'}
    with_end = {'name' => 'current_with_end', 'missions' => [{'end' => tomorrow}]}
    alum = {'name' => 'alum', 'missions' => [{'end' => yesterday}]}

    members = [no_end, with_end, alum]
    members = members.map {|each| wrapped = OpenStruct.new; wrapped.data = each; wrapped }

    current = community(members, 'current')
    past = community(members, 'past')

    assert_equal(2, current.size)
    assert_equal(1, past.size)
    assert_equal('alum', past.first.data['name'])
  end

end
