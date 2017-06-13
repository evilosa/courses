class Api::V1::ClientsController < Api::V1::BaseController
  before_action :load_client, only: [:show, :destroy]

  def index
    respond_with @clients = Client.all
  end

  def create
    @client = Client.new(client_params)
    if (@client.save)
      render json: @client
    else
      render json: {errors: @client.errors}, status: 422
    end
  end

  def show
    respond_with @client
  end

  def update
    @client = Client.find(params[:id])
    if (@client.update(client_params))
      render json: @client
    else
      render json: {errors: @client.errors}, status: 422
    end
  end

  def destroy
    respond_with (@client.destroy)
  end

  private

  def load_client
    @client = Client.find(params[:id])
  end

  def client_params
    params.require(:client).permit(:id, :created_at, :updated_at, :title, :full_name, :tax_number, :description)
  end
end