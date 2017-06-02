describe 'Create API' do
  describe 'POST #create' do

    let(:valid_params) { { client: attributes_for(:client), format: :json } }
    let(:invalid_params) { { client: attributes_for(:client, title: nil), format: :json } }

    let!(:create_client) do
      Proc.new do |params = valid_params|
        post '/api/v1/clients', params: params
      end
    end

    context 'with valid attributes' do
      before { create_client.call }

      it 'save client in database' do
        expect{ create_client.call }.to change(Client, :count).by(1)
      end
    end

    context 'with invalid attributes' do
      # it 'returns 422 status code' do
      #   create_client.call(invalid_params)
      #   expect(response).to eq 422
      # end

      it 'not save in database' do
        expect{ create_client.call(invalid_params) }.not_to change(Client, :count)
      end
    end
  end
end
