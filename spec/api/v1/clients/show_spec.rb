describe 'Client API' do
  describe 'GET #show' do

    context 'unauthorized' do
      let!(:client) { create(:client) }
      let(:parsed_response) { JSON.parse(response.body) }

      before do
        do_request
      end

      it 'client contains attributes' do
        expect(parsed_response['id']).to eq(client.id)
        expect(parsed_response['title']).to eq(client.title)
        expect(parsed_response['full_name']).to eq(client.full_name)
        expect(parsed_response['tax_number']).to eq(client.tax_number)
        expect(parsed_response['description']).to eq(client.description)
      end
    end
  end

  def do_request(params = {})
    get "/api/v1/clients/#{client.id}", params: { format: :json }.merge(params)
  end
end