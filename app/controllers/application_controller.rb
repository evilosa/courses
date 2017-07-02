require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder
    protect_from_forgery with: :null_session

  before_action :configure_permitted_parameters, if: :devise_contoller?

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :name
    devise_parameter_sanitizer.for(:sign_up) << :provider
    devise_parameter_sanitizer.for(:sign_up) << :uid
  end
end
