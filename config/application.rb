require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module SorcCourses
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    config.to_prepare do
      DeviseController.respond_to :json
    end

    # Use the responders controller from the responders gem
    #ActiveModelSerializers.config.adapter = :json_api

    config.autoload_paths << Rails.root.join('lib')

    config.app_generators.scaffold_controller :responders_controller



    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.i18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}').to_s]
    config.i18n.default_locale = :ru

    config.middleware.use I18n::JS::Middleware
  end
end
