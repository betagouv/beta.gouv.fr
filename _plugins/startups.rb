# frozen_string_literal: true
require 'json'
require 'date'

module Jekyll
  module StartupsApiHelper
    module_function

    # simple empty bucket
    def blank_bucket
      { 'active_members' => [], 'previous_members' => [], 'expired_members' => [] }
    end

    # normalize possible keys
    def normalize_key(key)
      return nil if key.nil?
      key.to_s.sub(%r{^/api/startups/}, '').sub(%r{^/startups/}, '')
    end

    # build membership index for all startups in one pass on authors
    def buildMembershipIndex(site)
      result = {}
      authors = site.collections['authors']
      now = Date.today

      authors.docs.each do |author|
        author_id = author.id.gsub('/authors/', '')

        # top-level startups / previously
        author['startups']&.each do |slug|
          result[slug] ||= blank_bucket
          if author.data['missions']&.last&.[]('end')&.<= now
            result[slug]['expired_members'] << author_id
          else
            result[slug]['active_members'] << author_id
          end
        end

        author['previously']&.each do |slug|
          result[slug] ||= blank_bucket
          result[slug]['previous_members'] << author_id
        end

        # missions windows
        next unless author['missions']
        author['missions'].each do |mission|
          next unless mission['startups']
          mission['startups'].each do |slug|
            result[slug] ||= blank_bucket
            if !mission['end'] || ((mission['start'] <= now) && (mission['end'] >= now))
              result[slug]['active_members'] << author_id
            elsif mission['end'] <= now
              result[slug]['expired_members'] << author_id
            end
          end
        end
      end

      # uniq arrays
      result.each_value do |bucket|
        bucket['active_members'].uniq!
        bucket['previous_members'].uniq!
        bucket['expired_members'].uniq!
      end

      result
    end

    # build membership bucket for a single slug (one-pass filter)
    def buildMembershipForSlug(site, slug)
      bucket = blank_bucket
      authors = site.collections['authors']
      now = Date.today

      authors.docs.each do |author|
        author_id = author.id.gsub('/authors/', '')

        if author['startups']&.include?(slug)
          if author.data['missions']&.last&.[]('end')&.<= now
            bucket['expired_members'] << author_id
          else
            bucket['active_members'] << author_id
          end
        end

        if author['previously']&.include?(slug)
          bucket['previous_members'] << author_id
        end

        next unless author['missions']
        author['missions'].each do |mission|
          next unless mission['startups']&.include?(slug)
          if !mission['end'] || ((mission['start'] <= now) && (mission['end'] >= now))
            bucket['active_members'] << author_id
          elsif mission['end'] <= now
            bucket['expired_members'] << author_id
          end
        end
      end

      bucket['active_members'].uniq!
      bucket['previous_members'].uniq!
      bucket['expired_members'].uniq!

      bucket
    end

    # build one startup object; uses membershipIndex if provided
    def buildStartup(site, slug, membershipIndex: nil)
      slug = normalize_key(slug)
      return nil if slug.nil? || slug.empty?

      # find startup doc
      startups = site.collections['startups']
      doc = startups.docs.find { |s| s.id.gsub('/startups/', '') == slug }

      # members bucket
      members = membershipIndex ? (membershipIndex[slug] || blank_bucket) : buildMembershipForSlug(site, slug)

      # base record (works even if doc is nil)
      record = {}
      record['id'] = slug
      record['name'] = doc ? doc['title'] : nil
      record['repository'] = doc ? doc['repository'] : nil
      record['contact'] = doc ? doc['contact'] : nil
      record['phases'] = doc ? doc['phases'] : nil

      # merge members (already uniq)
      record['active_members'] = members['active_members']
      record['previous_members'] = members['previous_members']
      record['expired_members'] = members['expired_members']

      record
    end

    # build full index: O(A + S)
    def buildIndex(site)
      result = {}

      # 1) membership index from authors
      membership_index = buildMembershipIndex(site)

      # 2) iterate all startup docs
      startups = site.collections['startups']
      startups.docs.each do |startup|
        startupId = startup.id.gsub('/startups/', '')
        result[startupId] = buildStartup(site, startupId, membershipIndex: membership_index)
      end

      # 3) include any slugs seen in members but missing a doc
      membership_index.each_key do |slug|
        next if result.key?(slug)
        result[slug] = buildStartup(site, slug, membershipIndex: membership_index)
      end

      result
    end
  end

  # full index (legacy behavior)
  class RenderStartupsApi < Liquid::Tag
    def render(context)
      site = context.registers[:site]
      result = StartupsApiHelper.buildIndex(site)
      JSON.pretty_generate(result)
    end
  end

  # single startup: {% render_startup_api ma-startup %}
  class RenderStartupApi < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      @key = markup.to_s.strip
    end

    def render(context)
      site = context.registers[:site]
      key = StartupsApiHelper.normalize_key(@key)
      record = StartupsApiHelper.buildStartup(site, key) # ad-hoc membership for one slug
      JSON.pretty_generate(record || { 'error' => "startup not found: #{key}" })
    end
  end

  # unchanged filter
  module FastFilter
    def fast_promotion(startups, promotion, sort_order = nil)
      laureates = startups.filter { |startup| startup.data.dig('fast', 'promotion') == promotion }
      return laureates if sort_order.nil?
      laureates.sort_by { |l| l.data.dig('fast', sort_order) }
    end
  end
end

Liquid::Template.register_filter(Jekyll::FastFilter)
Liquid::Template.register_tag('render_startups_api', Jekyll::RenderStartupsApi)
Liquid::Template.register_tag('render_single_startup_api',  Jekyll::RenderStartupApi)
