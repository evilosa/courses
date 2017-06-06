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
    @client.update(client_params)
    respond_with @client
  end

  private

  def load_client
    @client = Client.find(params[:id])
  end

  def client_params
    params.require(:client).permit(:id, :updated_at, :title, :full_name, :tax_number, :description)
  end
end