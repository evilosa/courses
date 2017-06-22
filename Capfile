# Load DSL and set up stages
require "capistrano/setup"
require "capistrano/deploy"
require "capistrano/rvm"
require "capistrano/bundler"
require 'capistrano/rails'
require 'capistrano/postgresql'
require 'capistrano/dotenv/tasks'
require 'capistrano3/unicorn'

require "capistrano/scm/git"
install_plugin Capistrano::SCM::Git

# Load custom tasks from `lib/capistrano/tasks` if you have any defined
Dir.glob("lib/capistrano/tasks/*.rake").each { |r| import r }
