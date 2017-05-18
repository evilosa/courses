class Api::V1::ClientsController < Api::V1::BaseController
  def index
    respond_with (@clients = Client.all)
  end

  def create
    @client = Client.create(client_params)
    respond_with(:api, :v1, @client)
  end

  private

  def client_params
    params.require(:client).permit(:title, :full_name, :tax_number, :description)
  end
end