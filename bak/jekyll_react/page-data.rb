module JekyllReact
  class PageData
    attr_reader :page, :site

    def initialize(site, page)
      @site = site
      @page = page
    end

    def title
      self.page.data['title']
    end

    def site_url
      self.site.config['url']
    end

    def full_url
      url_build = [self.site_url, self.site.baseurl].join
      [url_build, self.page.url].join
    end

    def full_path
      build_path = [self.full_url, self.title].join
      "#{build_path}.json"
    end

    def to_hash
      data_hash = {}
      data_hash = data_hash.merge({
        title:      self.title,
        site_url:   self.site_url,
        base_url:   self.site.baseurl,
        rel_path:   self.page.url,
        full_url:   self.full_url,
        full_path:  self.full_path,
        body:       self.page.content,
        meta:       self.page.data
      })
    end
  end
end


