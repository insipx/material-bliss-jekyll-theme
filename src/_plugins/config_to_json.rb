module Jekyll
  require 'json'
  require 'fileutils'
 
  class GenerateJSON < Jekyll::Generator
    safe true
    priority :low
    @@globals = {
      "json_file" => "config.json",
      "output_directory" => "/api/config",
      "output_file" => "config.json",
      "src_dir" => "",
      "dst_dir" => ""
    }
    def self.json_output_directory
      @@globals["output_directory"]
    end
    def self.json_file
      @@globals["json_file"]
    end

    def generate(site)
      
      @@globals["src_dir"] = File.join(site.source, @@globals["output_directory"])
      @@globals["dst_dir"] = File.join(site.dest, @@globals["output_directory"])
      FileUtils.mkdir_p(@@globals["src_dir"]) unless File.exists?(@@globals["src_dir"])

      config = site.config['react']
      config_json = config.to_json
      
      @@globals["json_file"] = File.join(@@globals["src_dir"], @@globals["json_file"])
      f = File.new(@@globals["json_file"], "w+")
      f.puts config_json
      f.close
      
      site.static_files << Jekyll::StaticFile.new(site, site.source, @@globals['output_directory'], @@globals['output_file'])
     
    end
  end
  #static override of the Jekyll Class
  class Site
    alias :super_write :write
    def write
      # call the super method to generate our site
      # Must call otherwise our site will be gone :'(
      super_write

      # cleanup source folder
      src_folder = File.join(source, GenerateJSON::json_output_directory)
      File.unlink GenerateJSON::json_file if File.exists?(GenerateJSON::json_file)
      FileUtils.rm_rf(src_folder)
      src_arr = src_folder.split("/")
      src_arr.pop
      src_folder = src_arr.join("/")
      FileUtils.rm_rf(src_folder)

    end
  end
end
