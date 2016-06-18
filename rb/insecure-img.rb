class InsecureImages < ::HTMLProofer::Check
  def secure?
    @img.scheme != 'http'
  end

  def run
    @html.css('img').each do |node|
      if node.attributes["src"].nil? || (node.attributes["src"].value.match /^http:/)
        return add_issue("Don't include images from insecure location!", line: node.line)
      end
    end
  end
end