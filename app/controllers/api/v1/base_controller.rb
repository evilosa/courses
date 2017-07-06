class Api::V1::BaseController < ApplicationController
  include Pundit

  before_action :authenticate_user!

  respond_to :json
end