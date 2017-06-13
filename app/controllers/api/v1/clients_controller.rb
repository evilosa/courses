class Api::V1::ClientsController < Api::V1::BaseController
  before_action :load_client, only: [:show, :destroy]

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
    begin
      @client = Client.find(params[:id])
      if @client.update(client_params)
        head :no_content
      else
        raise @client.errors
      end
    rescue Exception => ex
      render json: { error: ex.message }, status: :unprocessable_entity
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