class Api::V1::ClientsController < Api::V1::BaseController
  before_action :load_client, only: [:show, :update, :destroy]

  def index
    authorize :client
    render json: Client.all
  end

  def create
    authorize :client
    @client = Client.new(client_params)
    if (@client.save)
      render json: @client
    else
      render json: {errors: @client.errors.full_messages}, status: 422
    end
  end

  def show
    authorize @client
    respond_with @client
  end

  def update
    authorize @client
    if (@client.update(client_params))
      render json: @client
    else
      render json: {errors: @client.errors.full_messages}, status: 422
    end
  end

  def destroy
    authorize @client
    if (@client.destroy)
      render json: @client.id
    else
      render json: {errors: @client.errors.full_messages}, status: 422
    end
  end

  def search
    search_title = params[:title]
    result = []

    if search_title != ''
      Client.where("title ILIKE ?", "%#{search_title}%").each { |client| result << { value: client.id, label: client.title } }
    else
      Client.first(50).each { |client| result << { value: client.id, label: client.title } }
    end

    render json: result
  end

  private

  def load_client
    @client = Client.find(params[:id])
  end

  def client_params
    params.require(:client).permit(:id, :created_at, :updated_at, :title, :full_name, :tax_number, :description, :logo)
  end
end