#!/usr/bin/env ruby

require 'rubygems'
require 'bundler'
Bundler.setup :test

require 'opengraph_parser'
require 'minitest/autorun'

class TestHomepage < MiniTest::Unit::TestCase
  def setup
    @home    = OpenGraph.new('http://127.0.0.1:4000/')
    @home_en = OpenGraph.new('http://127.0.0.1:4000/en')
  end

  def test_title
    assert_equal('Incubateur de services publics numériques', @home.title)
    assert_equal('beta.gouv.fr', @home_en.title)
  end

  def test_description
    assert_equal('Nous créons des services publics numériques', @home.description)
    assert_equal('We build digital public services', @home_en.description)
  end

  def test_url
    assert_equal('https://beta.gouv.fr/', @home.url)
  end

  def test_type
    assert(@home.type != 'article', "Should not parse anything or default to 'website'")
  end

  def test_image
    assert_includes(@home.images, 'https://beta.gouv.fr/img/pages/index.jpg')
    assert_includes(@home_en.images, 'https://beta.gouv.fr/img/pages/index.jpg')
  end
end

class TestArticle < MiniTest::Unit::TestCase
  def setup
    @post = OpenGraph.new('http://127.0.0.1:4000/evenement/2016/03/29/devoxx.html')
  end

  def test_title
    assert_equal('beta.gouv.fr @ Devoxx 2016', @post.title)
  end

  def test_description
    assert_equal('Fatigué de l’API Google Maps pour géocoder des adresses françaises ? Agacée de devoir commander de nouveaux K-bis tous les trois mois ? Atterré de devoir connaître tout le droit pour accéder à vos droits ?', @post.description)
  end

  def test_url
    assert_equal('https://beta.gouv.fr/evenement/2016/03/29/devoxx.html', @post.url)
  end

  def test_type
    assert_equal('article', @post.type)
  end

  def test_image
    assert_includes(@post.images, 'https://beta.gouv.fr/img/posts/2016-03-29-devoxx.jpg')
  end
end
