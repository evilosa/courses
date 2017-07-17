describe 'Client API' do
  describe 'POST #create' do

    let!(:user) { create(:user) }
    let!(:token) { JWTWrapper.encode({user_id: user.id} ) }

    let(:valid_params) { { client: attributes_for(:client), format: :json } }
    let(:invalid_params) { { client: attributes_for(:client, title: nil), format: :json } }

    it_behaves_like 'API authenticable'

    context 'authenticated' do
      context 'with valid attributes' do
        it 'save client in database' do
          print Client.count
          # expect(do_request(client: valid_params,token: token)).to change(Client, :count).by(1)
          do_request(client: valid_params,token: token)
          expect(Client.count).to eq 1
          print Client.count
        end
      end

      context 'with invalid attributes' do
        it 'not save in database' do
          expect{ do_request(invalid_params) }.not_to change(Client, :count)
        end
      end
    end
  end

  def do_request(params = {}, client = attributes_for(:client), token = '')
    headers = {
        Accept: 'application/json',
        Content_Type: 'application/json',
        Authorization: "Bearer #{token}"
    }

    post '/api/v1/clients', params: { format: :json, headers: headers }.merge(params).merge(client: client)
  end
end
