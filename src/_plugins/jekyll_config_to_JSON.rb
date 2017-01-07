require 'json'
require 'fileutils'

module Jekyll
  
  # https://github.com/jekyll/jekyll-sitemap/blob/v0.7.0/lib/jekyll-sitemap.rb#L3-L8
  class PageWithoutAFile < Page
    def read_yaml(*)
      @data ||= {}
    end
  end
  
  class GenerateJSON < Jekyll::Generator
    attr_reader :site
    safe true
    priority :low

    def generate(site)
      config = site.config['react']
      config_json = config.to_json
      page = PageWithoutAFile.new(site, File.dirname(__FILE__), self.dest_dir, 'config.json')
      page.content = config_json
      site.pages << page
    end

    def dest_dir
      File.join('api', 'v1')
    end
  end

  class Site
    alias :super_write :write
    def write
      super_write
    end
  end
end







=begin  dev on new plugin
      @site.pages.each do |page|
        if page.data['render'] && page.data['render'] == 'dynamic'
          puts page.url
          page.content = ''
        end
      end

    def add_to_pages(name, data)
      self.site.pages << self.page(name, data)
    end


=end

