require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder
  include Pundit
  after_action :verify_authorized

  protect_from_forgery prepend: true

  # before_action :configure_permitted_parameters, if: :devise_controller?
  #
  # def configure_permitted_parameters
  #   devise_parameter_sanitizer.for(:sign_up) << :name
  #   devise_parameter_sanitizer.for(:sign_up) << :provider
  #   devise_parameter_sanitizer.for(:sign_up) << :uid
  # end

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  private

  def user_not_authorized
    redirect_to new_user_session_path, status: 403
  end
end
