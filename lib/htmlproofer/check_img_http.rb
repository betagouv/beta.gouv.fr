# frozen_string_literal: true

class CheckImgHTTP < HTMLProofer::Check
  ERROR_MESSAGE = <<~ERR
    This image src is insecure. Including it would result in marking
    the whole page as insecure through mixed-content.
  ERR

  def run
    @html.css('img').each do |img|
      add_issue(ERROR_MESSAGE, line: img.line) if insecure?(img)
    end
  end

  private

  def insecure?(img)
    img.attributes['src'].try(:value).match?(/^http:/)
  end
end
