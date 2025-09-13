# frozen_string_literal: true

require 'json'
require 'date'

module Jekyll
  # rubocop:disable Metrics/ModuleLength
  module StartupsApiHelper
    module_function

    def blank_bucket
      { 'active_members' => [], 'previous_members' => [], 'expired_members' => [] }
    end

    def normalize_key(key)
      return nil if key.nil?

      key.to_s.sub(%r{^/api/startups/}, '').sub(%r{^/startups/}, '')
    end

    def build_membership_index(site)
      result = {},
               authors = site.collections['authors']
      now = Date.today

      authors.docs.each do |author|
        author_id = author.id.gsub('/authors/', '')

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
      result.each_value do |bucket|
        bucket['active_members'].uniq!
        bucket['previous_members'].uniq!
        bucket['expired_members'].uniq!
      end
      result
    end

    def build_membership_for_slug(site, slug)
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
        bucket['previous_members'] << author_id if author['previously']&.include?(slug)

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

    def build_startup(site, slug, membership_index: nil)
      slug = normalize_key(slug)
      return nil if slug.nil? || slug.empty?

      startups = site.collections['startups']
      doc = startups.docs.find { |s| s.id.gsub('/startups/', '') == slug }
      members = membership_index ? (membership_index[slug] || blank_bucket) : build_membership_for_slug(site, slug)
      record = {}
      record['id'] = slug
      record['name'] = doc ? doc['title'] : nil
      record['repository'] = doc ? doc['repository'] : nil
      record['contact'] = doc ? doc['contact'] : nil
      record['phases'] = doc ? doc['phases'] : nil
      record['active_members'] = members['active_members']
      record['previous_members'] = members['previous_members']
      record['expired_members'] = members['expired_members']

      record
    end

    def build_index(site)
      result = {}
      membership_index = build_membership_index(site)
      startups = site.collections['startups']
      startups.docs.each do |startup|
        startupId = startup.id.gsub('/startups/', '')
        result[startupId] = build_startup(site, startupId, membership_index: membership_index)
      end
      membership_index.each_key do |slug|
        next if result.key?(slug)

        result[slug] = build_startup(site, slug, membership_index: membership_index)
      end

      result
    end
  end
  # rubocop:enable Metrics/ModuleLength

  # full index (legacy behavior)
  class RenderStartupsApi < Liquid::Tag
    def render(context)
      site = context.registers[:site]
      result = StartupsApiHelper.build_index(site)
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
      record = StartupsApiHelper.build_startup(site, key) # ad-hoc membership for one slug
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
Liquid::Template.register_tag('render_single_startup_api', Jekyll::RenderStartupApi)
