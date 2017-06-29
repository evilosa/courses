# config valid only for current version of Capistrano
lock '3.8.2'

set :application, 'courses'
set :repo_url, 'git@github.com:evilosa/sorc_courses.git'

# Default branch is :master
set :branch, 'deploy'
ask :deploy, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, '/home/deployer/courses'
set :deploy_user, 'deployer'

# Default value for :linked_files is []
append :linked_files, 'config/database.yml'

# Default value for linked_dirs is []
append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'public/system', 'vendor/bundle', 'public/uploads'

set :keep_releases, 10

set :rvm_ruby_version, '2.4.1@courses'