require 'json'
require 'fileutils'
require_relative 'page-data.rb'
require_relative 'render.rb'

module Jekyll
  
  # https://github.com/jekyll/jekyll-sitemap/blob/v0.7.0/lib/jekyll-sitemap.rb#L3-L8
  # inspired by https://github.com/18F/jekyll_pages_api
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
      @site = site
      config = site.config['react']
      config_json = config.to_json
      new_page('config.json', config_json, self.dest_dir)
      parse_pages
      parse_data
    end
    
    def parse_pages
      @site.pages.each do |page|
        if page.data['render'] && page.data['render'] == 'dynamic'
          rendered_content = JekyllReact::Render.new(self.site, page, site_payload = nil)
          page.content=rendered_content.run
          dyn_page = JekyllReact::PageData.new(@site, page)
          name = "#{page.data['title']}.json"
          page_json = dyn_page.to_hash.to_json
          new_page(name, page_json, page.url)
          page.content = ''
        end
      end
    end
    
    def parse_data
      @site.data.each do |site_file|
        new_page("#{site_file[0]}.json", site_file.to_json, self.dest_dir)
      end
    end

    def new_page(name, data, dir)
      page = PageWithoutAFile.new(@site, File.dirname(__FILE__), dir, name.to_s)
      page.content = data
      @site.pages << page
    end

    def dest_dir
      File.join('api', 'v1')
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

