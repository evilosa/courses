class Api::V1::ClientsController < Api::V1::BaseController
  def index
    respond_with (@clients = Client.all)
  end
end