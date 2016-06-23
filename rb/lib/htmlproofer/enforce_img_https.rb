class EnforceImgHTTPS < ::HTMLProofer::Check
  def run
    @html.css('img').each do |node|
      img = create_element(node)

      if img.remote? && unsecure?(img)
        return add_issue("Don't include images from an insecure location!", line: node.line)
      end
    end
  end

  private

  def unsecure?(img)
    img.scheme != 'https'
  end
end
