# The "SORC courses" project

## Full install for Ubuntu 16.04 LTS

### Install language
1) `sudo apt-get install language-pack-ru`

### Install git
1) `sudo apt install git`

### Install Ruby version manager (from rvm.io)
1) `gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3`
2) `\curl -sSL https://get.rvm.io | bash -s stable`
3) In terminal open menu 'EDIT - Profile settings', select 'CMD' tab and check 'shell mode'
4) Restart terminal
5) `rvm install ruby-2.4.0`

### Clone project
1) In main projects folder type `git clone https://github.com/evilosa/sorc_courses`
2) Move in to the project folder, it must create new rvm gemset 'ruby-2.4.0@sorc_courses'

### Install PostgreSQL 9.5

1) `sudo apt-get update`
2) `sudo apt-get install postgresql postgresql-contrib postgresql-server-dev-9.5 libpq-dev`
3) `sudo pg_dropcluster --stop 9.5 main`
4) `pg_createcluster --locale ru_RU.UTF-8 --start 9.5 main`
5) Create db user `sudo -u postgres createuser --interactive`
6) Login with postgresql user `sudo -i -u postgres`
7) Open db console, run `psql`
8) In PSQL console type `ALTER USER username WITH ENCRYPTED PASSWORD 'password';` Change `username` and `password` to your operating system user and preferable password.
9) To exit from psql type `\q`
10) To logout from postgresql user type 'logout'
11) Create `config/database.yml` from `config/database.sample` with your user and password

### Install QT5 for Capybara-webkit

1) `sudo apt-get install qt5-default libqt5webkit5-dev`

### Install NPM & Node
1) `sudo apt install npm`
2) `sudo apt install nodejs-legacy`
3) Type `node -v`, if your version is smaller than 7.1, then type next commands
* `sudo npm cache clean -f`
* `sudo npm install -g n`
* `sudo n stable`

### Install Yarn
1) `curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`
2) `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`
3) `sudo apt-get update && sudo apt-get install yarn`

### Common
1) You must be in project folder
2) Create file `.env` in root folder from `.env-sample`
3) `gem install bundle`
4) `bundle`
5) `yarn install`
6) `rake db:create db:migrate db:seed`
7) Run in separate console:
* `rails server`
* `bin/webpack-dev-server`
8) Open `localhost:3000` in web browser


### Thinking sphinx 
1) install mysql2 `sudo apt-get install libmysqlclient-dev`

### Increasing the amount of inotify watchers for RubyMine

1) `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`
