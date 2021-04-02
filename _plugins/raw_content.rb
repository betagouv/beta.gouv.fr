module Jekyll

  class RawContent < Generator

    def generate(site)
      authors = site.collections['authors']
      authors.docs.each do |author|
        author.data['raw_content'] = author.content
      end
    end
  
  end

end
        