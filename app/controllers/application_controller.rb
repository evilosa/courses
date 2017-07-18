require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder
  include Pundit
  after_action :verify_authorized

  protect_from_forgery prepend: true

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  private

  def user_not_authorized
    redirect_to new_user_session_path, status: 403
  end
end
