# config valid only for current version of Capistrano
lock '3.8.2'

set :application, 'courses'
set :repo_url, 'git@github.com:evilosa/sorc_courses.git'

# Default branch is :master
ask :deploy, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, '/home/deployer/courses'
set :deploy_user, 'deployer'

# Default value for :linked_files is []
append :linked_files, 'config/database.yml', 'config/secrets.yml', '.env', 'config/sidekiq.yml', 'config/thinking_sphinx.yml'

# Default value for linked_dirs is []
append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'public/system', 'vendor/bundle', 'public/uploads'

set :keep_releases, 10

namespace :deploy do
  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      invoke 'unicorn:restart'
    end
  end

  after :publishing, :restart
end