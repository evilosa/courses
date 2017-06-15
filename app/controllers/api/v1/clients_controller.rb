class Api::V1::ClientsController < Api::V1::BaseController
  before_action :load_client, only: [:show, :update, :destroy]

  def index
    respond_with @clients = Client.all
  end

  def create
    @client = Client.new(client_params)
    if (@client.save)
      render json: @client
    else
      render json: {errors: @client.errors.full_messages}, status: 422
    end
  end

  def show
    respond_with @client
  end

  def update
    if (@client.update(client_params))
      render json: @client
    else
      render json: {errors: @client.errors.full_messages}, status: 422
    end
  end

  def destroy
    if (@client.destroy)
      render json: @client.id
    else
      render json: {errors: @client.errors.full_messages}, status: 422
    end
  end

  private

  def load_client
    @client = Client.find(params[:id])
  end

  def client_params
    params.require(:client).permit(:id, :created_at, :updated_at, :title, :full_name, :tax_number, :description, :logo)
  end
end