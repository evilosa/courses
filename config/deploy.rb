# config valid only for current version of Capistrano
lock '3.8.2'

set :application, 'courses'
set :repo_url, 'git@github.com:evilosa/sorc_courses.git'

# Default branch is :master
set :branch, 'sso_discourse'
ask :sso_discourse, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :stage, :production
set :rails_env, :production

set :deploy_to, '/home/deployer/courses'
set :deploy_user, 'deployer'

# Default value for :linked_files is []
append :linked_files, 'config/database.yml', 'config/webpacker.yml', 'config/secrets.yml', 'lib/single_sign_on.rb'

# Default value for linked_dirs is []
append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'public/system', 'vendor/bundle', 'public/uploads'

set :keep_releases, 10

set :rvm_ruby_version, '2.4.1@courses'