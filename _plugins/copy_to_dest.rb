require "fileutils"

Jekyll::Hooks.register :site, :after_init do |site|
  site.config["copy_to_dest"].each { |copy|
    Jekyll.logger.info "Copying:", "#{copy["source"]} to #{copy["target"]}"
    src = "#{site.source}/#{copy["source"]}"
    dest = "#{site.dest}/#{copy["target"]}"
    FileUtils.mkdir_p dest
    FileUtils.cp_r src, dest
  }
end
