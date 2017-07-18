describe 'Client API' do
  describe 'POST #create' do

    let!(:user) { create(:user) }
    let!(:user_token) { JWTWrapper.encode({ user_id: user.id } ) }

    let!(:client) { create(:client_user) }
    let!(:client_token) { JWTWrapper.encode({ user_id: client.id } ) }

    let!(:admin) { create(:admin_user) }
    let!(:admin_token) { JWTWrapper.encode({ user_id: admin.id } ) }

    let!(:valid_params) { { client: attributes_for(:client), format: :json } }
    let(:invalid_params) { { client: attributes_for(:client, title: nil), format: :json  } }

    it_behaves_like 'API authenticable'

    context 'authenticated' do

      context 'user with default role' do
        it 'can not create clients' do
          expect{ do_request(valid_params, user_token) }.not_to change(Client, :count)
          expect(response.status).to eq 403
        end
      end

      context 'user with client role' do
        it 'can not create clients' do
          expect{ do_request(valid_params, client_token) }.not_to change(Client, :count)
          expect(response.status).to eq 403
        end
      end

      context 'user with admin role' do
        it 'can create clients' do
          expect{ do_request(valid_params, admin_token) }.to change(Client, :count).by(1)
        end

        it 'can not create client with invalid attributes' do
          expect{ do_request(invalid_params, admin_token) }.not_to change(Client, :count)
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
