module ContentUrlEncodedMarkdown
  class Generator < Jekyll::Generator
    def generate(site)
      startups = site.collections['startups']
      startups.docs.each do |startup|
        startup.data['content_url_encoded_markdown'] = ERB::Util.url_encode(startup.content)
      end
    end
  end
end
