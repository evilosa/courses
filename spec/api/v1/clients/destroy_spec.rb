describe 'Client API' do
  describe 'DELETE #remove' do

    let!(:user) { create(:user) }
    let!(:user_token) { JWTWrapper.encode({ user_id: user.id } ) }

    let!(:client) { create(:client_user) }
    let!(:client_token) { JWTWrapper.encode({ user_id: client.id } ) }

    let!(:admin) { create(:admin_user) }
    let!(:admin_token) { JWTWrapper.encode({ user_id: admin.id } ) }

    let!(:clients) { create_list(:client, 10) }
    let!(:last) { clients.last }

    it_behaves_like 'API authenticable'

    context 'authenticated' do

      context 'user with default role' do
        it 'can not delete client' do
          expect{ do_request(token: user_token) }.not_to change(Client, :count)
          expect(response.status).to eq 403
        end
      end

      context 'user with client role' do
        it 'can not delete client' do
          expect{ do_request(token: client_token) }.not_to change(Client, :count)
          expect(response.status).to eq 403
        end
      end

      context 'user with admin role' do
        it 'can destroy client' do
          expect{ do_request(token: admin_token) }.to change(Client, :count).by(-1)
        end
      end
    end

  end

  def do_request(params: { format: :json }, token: '')
    headers = {
        'Accept' => 'application/json',
        'Content-Type' => 'application/json',
        'Authorization' => "Bearer #{token}"
    }

    delete "/api/v1/clients/#{last.id}", params: params.to_json, headers: headers
  end
end