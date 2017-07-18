describe 'Client API' do
  describe 'GET #index' do

    let!(:clients) { create_list(:client, 2)}

    let!(:user) { create(:user) }
    let!(:user_token) { JWTWrapper.encode({ user_id: user.id } ) }

    let!(:client) { create(:client_user) }
    let!(:client_token) { JWTWrapper.encode({ user_id: client.id } ) }

    let!(:admin) { create(:admin_user) }
    let!(:admin_token) { JWTWrapper.encode({ user_id: admin.id } ) }

    it_behaves_like 'API authenticable'

    context 'authenticated' do

      context 'user with default role' do
        it 'return 403 status' do
          do_request(token: user_token)
          expect(response.status).to eq 403
        end
      end

      context 'user with client role' do
        it 'return 403 status' do
          do_request(token: client_token)
          expect(response.status).to eq 403
        end
      end

      context 'user with admin role' do
        it 'can see list of clients' do
          do_request(token: admin_token)
          expect(response.status).to eq 200
          expect(response.body).to have_json_size(2)
        end
      end
    end
  end

  def do_request(token: '')
    headers = {
        'Accept' => 'application/json',
        'Content-Type' => 'application/json',
        'Authorization' => "Bearer #{token}"
    }

    get '/api/v1/clients', params: { format: :json }.to_json, headers: headers
  end

end