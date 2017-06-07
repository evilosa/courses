describe 'Client API' do
  describe 'PUT #update' do

    context 'unauthorized' do
      let!(:client) { create(:client) }
      let(:parsed_response) { JSON.parse(response.body) }

      before do
        get_request
      end

      it 'client contains initital attributes' do
        expect(parsed_response['id']).to eq(client.id)
        expect(parsed_response['title']).to eq(client.title)
        expect(parsed_response['full_name']).to eq(client.full_name)
        expect(parsed_response['tax_number']).to eq(client.tax_number)
        expect(parsed_response['description']).to eq(client.description)
      end

      it 'contain updated attributes' do
        update_request({ client: {
          title: 'New title',
          full_name: 'New full name',
          tax_number: 'New tax number',
          description: 'New description'}});

        expect(response.status).to eq 204

        get_request
        expect(parsed_response['title']).to eq('New title')
        expect(parsed_response['full_name']).to eq('New full name')
        expect(parsed_response['tax_number']).to eq('New tax number')
        expect(parsed_response['description']).to eq('New description')
      end

      it 'return 422 code to invalid attributes' do
        invalid_request({ client: {
              title: 'New title',
              full_name: {name: 'name'}}});

          expect(response.status).to eq 422
      end
    end
  end

  def invalid_request(params = {})
    put "/api/v1/clients/999999", params: { format: :json }.merge(params)
  end

  def update_request(params = {})
    put "/api/v1/clients/#{client.id}", params: { format: :json }.merge(params)
  end

  def get_request(params = {})
    get "/api/v1/clients/#{client.id}", params: { format: :json }.merge(params)
  end
end