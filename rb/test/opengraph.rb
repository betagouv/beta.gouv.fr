require 'opengraph_parser'
require 'minitest/autorun'


class TestHomepage < MiniTest::Unit::TestCase
  def setup
    @url = "http://localhost:4000/"
    @home = OpenGraph.new(@url)
  end

  def test_title
    assert_equal "beta.gouv.fr", @home.title
  end

  def test_description
    assert_equal "Nous créons des services publics numériques", @home.description
  end

  def test_url
    assert_equal @url, @home.url
  end

  def test_type
    assert @home.type != "article", "Should not parse anything or default to 'website'"
  end

  def test_image
    assert_includes @home.images, "http://localhost:4000/img/index.jpg"
  end
end

class TestArticle < MiniTest::Unit::TestCase
  def setup
    @url = "http://localhost:4000/evenement/2016/03/29/devoxx.html"
    @post = OpenGraph.new(@url)
  end

  def test_title
    assert_equal "beta.gouv.fr @ Devoxx 2016", @post.title
  end

  def test_description
    assert_equal "Fatigué de l’API Google Maps pour géocoder des adresses françaises ? Agacée de devoir commander de nouveaux K-bis tous les trois mois ? Atterré de devoir connaître tout le droit pour accéder à vos droits ?", @post.description
  end

  def test_url
    assert_equal @url, @post.url
  end

  def test_type
    assert_equal "article", @post.type
  end

  def test_image
    assert_includes @post.images, "http://localhost:4000/img/posts/2016-03-29-devoxx.jpg"
  end
end
