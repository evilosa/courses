describe 'Client API' do
  describe 'POST #create' do

    let!(:user) { create(:user) }
    let!(:token) { JWTWrapper.encode({ user_id: user.id } ) }

    let!(:valid_params) { { client: attributes_for(:client), format: :json } }
    let(:invalid_params) { { client: attributes_for(:client, title: nil), format: :json  } }

    it_behaves_like 'API authenticable'

    context 'authenticated' do
      context 'with valid attributes' do
        it 'save client in database' do
          expect{ do_request(valid_params, token) }.to change(Client, :count).by(1)
        end
      end

      context 'with invalid attributes' do
        it 'not save in database' do
          expect{ do_request(invalid_params, token) }.not_to change(Client, :count)
        end
      end
    end
  end

  def do_request(params = {}, token = '')
    headers = {
        'Accept' => 'application/json',
        'Content-Type' => 'application/json',
        'Authorization' => "Bearer #{token}"
    }

    post '/api/v1/clients', params: params.to_json, headers: headers
  end
end
