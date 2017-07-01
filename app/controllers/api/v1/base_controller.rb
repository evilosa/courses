class Api::V1::BaseController < ApplicationController
  protect_from_forgery with: :exception

  before_action :authenticate_user!

  respond_to :json
end