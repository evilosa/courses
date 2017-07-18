describe 'Client API' do
  describe 'GET #show' do

    let!(:clients) { create_list(:client, 2)}

    let!(:user) { create(:user) }
    let!(:user_token) { JWTWrapper.encode({ user_id: user.id } ) }

    let!(:client) { create(:client_user) }
    let!(:client_token) { JWTWrapper.encode({ user_id: client.id } ) }

    let!(:admin) { create(:admin_user) }
    let!(:admin_token) { JWTWrapper.encode({ user_id: admin.id } ) }

    let!(:client_item) {
      client_item = create(:client)
      client_item.users << client
      client_item
    }

    let(:parsed_response) { JSON.parse(response.body) }

    it_behaves_like 'API authenticable'

    context 'authenticated' do

      context 'user with default role' do
        it 'return 403 status' do
          do_request(token: user_token)
          expect(response.status).to eq 403
        end
      end

      context 'user with client role' do
        it 'can see own record' do
          do_request(token: client_token)
          expect(response.status).to eq 200
          expect(parsed_response['id']).to eq(client_item.id)
          expect(parsed_response['title']).to eq(client_item.title)
          expect(parsed_response['full_name']).to eq(client_item.full_name)
          expect(parsed_response['tax_number']).to eq(client_item.tax_number)
          expect(parsed_response['description']).to eq(client_item.description)
        end
      end

      context 'user with admin role' do
        it 'can see client attributes' do
          do_request(token: admin_token)
          expect(response.status).to eq 200
          expect(parsed_response['id']).to eq(client_item.id)
          expect(parsed_response['title']).to eq(client_item.title)
          expect(parsed_response['full_name']).to eq(client_item.full_name)
          expect(parsed_response['tax_number']).to eq(client_item.tax_number)
          expect(parsed_response['description']).to eq(client_item.description)
        end
      end
    end
  end

  def do_request(params: {}, token: '')
    headers = {
        'Accept' => 'application/json',
        'Content-Type' => 'application/json',
        'Authorization' => "Bearer #{token}"
    }

    get "/api/v1/clients/#{client_item.id}", params: { format: :json }.merge(params), headers: headers
  end

end