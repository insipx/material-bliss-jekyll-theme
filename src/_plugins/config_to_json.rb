module Jekyll
  require 'json'
  require 'fileutils'
 
  class GenerateJSON < Jekyll::Generator
    safe true
    priority :low
    @@globals = {
    "json_file_full" => "CONFIG.test",
    "json_file" => "CONFIG.test",
    "output_directory" => "/config",
    "output_file" => "",
    "src_dir" => "",
    "dst_dir" => ""
    }
    def self.json_output_directory
      @@globals["output_directory"]
    end
    def self.json_file
      @@globals["json_file_full"]
    end

    def generate(site)
      @@globals["src_dir"] = File.join(site.source, @@globals["output_directory"])
      @@globals["dst_dir"] = File.join(site.config["destination"], @@globals["output_directory"])
      FileUtils.mkdir_p(@@globals["src_dir"]) unless File.exists?(@@globals["src_dir"])

      config = site.config['react']
      config_json = config.to_json
      @@globals["json_file_full"] = File.join(@@globals["src_dir"], @@globals["json_file"])
      f = File.new(@@globals["json_file_full"], "w+")
      f.puts config_json
      f.close
      
      #FileUtils::mkdir_p "#{site.source}/config" 
      #output_file = File.open("#{site.source}/config/CONFIG.test", 'w+')
      site.static_files << Jekyll::StaticFile.new(site, site.source, 'config/', 'CONFIG.test')
      #FileUtils::rm_rf "#{site.source}/config"
    end
  end
  class Site
    alias :super_write :write
    def write
      # call the super method to generate our site
      super_latex_write

      # cleanup source folder
      dest_folder = File.join(dest, GenerateJSON::json_output_directory)
      src_folder = File.join(source, GenerateJSON::json_output_directory)
      FileUtils.mkdir_p(dest_folder) unless File.exists?(dest_folder)
      File.unlink GenerateJSON::json_file if File.exists?(GenerateJSON::json_file)
      FileUtils.rm_rf(src_folder)
    end
  end
end
