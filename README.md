# The "SORC courses" project

## Full install for Ubuntu 16.04 LTS

### Increasing the amount of inotify watchers for RubyMine

1) `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

### Install PostgreSQL 9.5

1) `sudo apt-get update`
2) `sudo apt-get install postgresql postgresql-contrib postgresql-server-dev-9.5 libpq-dev`
3) Create db user `sudo -u postgres createuser --interactive`
4) Login with postgresql user `sudo -i -u postgres`
5) Open db console, run `psql`
6) In PSQL console type `ALTER USER username WITH ENCRYPTED PASSWORD 'password';`
7) Create `config/database.yml` from `config/database.sample` with your user and password

### Install QT5 for Capybara-webkit

1) `sudo apt-get install qt5-default libqt5webkit5-dev`

### Install Yarn
1) `curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`
2) `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`
3) `sudo apt-get update && sudo apt-get install yarn`

### Common
1) Create file `.env` in root folder from `.env-sample`
2) `bundle`
3) `npm install`
4) `yarn install`
5) `rake db:create db:migrate db:seed`
6) `rake RAILS_ENV=test db:create db:migrate db:seed`
7) Run in separate console:
* `rails server`
* `bin/webpack-dev-server`
8) Open `localhost:3000` in web browser