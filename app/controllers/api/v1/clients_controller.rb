class Api::V1::ClientsController < Api::V1::BaseController
  before_action :load_client, only: [:show, :update, :destroy]

  def index
    respond_with @clients = Client.all
  end

  def create
    @client = Client.create(client_params)
    render json: true
  end

  def show
    respond_with @client
  end

  def update
    respond_with @client.update(client_params)
  end

  private

  def load_client
    @client = Client.find(params[:id])
  end

  def client_params
    params.require(:client).permit(:title, :full_name, :tax_number, :description)
  end
end