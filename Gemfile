source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.0.rc1'
gem 'pg', '~>0.21'
gem 'sass-rails', github: "rails/sass-rails"
gem 'uglifier', '>= 1.3.0'
gem 'webpacker'
gem 'coffee-rails', '~> 4.2'
gem 'jbuilder', '~> 2.5'
gem 'responders'
gem 'active_model_serializers'
gem 'i18n-js'
gem 'puma'
gem 'rubyzip'
gem 'faker'
gem 'factory_girl_rails'
gem 'devise'
gem 'omniauth'
gem 'jwt'
gem 'rolify'
gem 'pundit'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'letter_opener'
  gem 'selenium-webdriver'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'capistrano', require: false
  gem 'capistrano-bundler', require: false
  gem 'capistrano-rails', require: false
  gem 'capistrano-rvm', require: false
  gem 'capistrano3-puma', require: false
end

group :test do
  gem 'rspec-rails', '~> 3.5'
  gem 'capybara', '~> 2.13.0'
  gem 'capybara-webkit'
  gem 'capybara-email'
  gem 'json_spec'
  gem 'poltergeist'
  gem 'launchy'
  gem 'rails-controller-testing'
  gem 'shoulda-matchers', '~> 3.1'
  gem 'with_model'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
