class CheckImgHTTP < ::HTMLProofer::Check
  def run
    @html.css('img').each do |node|
      if node.attributes['src'].try(:value) =~ %r{^http:}
        return(
          add_issue(
            'This image src is insecure. Including it would result in marking the whole page as insecure through mixed-content.',
            line: node.line
          )
        )
      end
    end
  end
end
