class Api::V1::ClientsController < Api::V1::BaseController
  def index
    respond_with @clients = Client.all
  end

  def create
    @client = Client.create(client_params)
    render json: true
  end

  def show
    @client = Client.find(params[:id])
    respond_with @client
  end

  private

  def client_params
    params.require(:client).permit(:title, :full_name, :tax_number, :description)
  end
end