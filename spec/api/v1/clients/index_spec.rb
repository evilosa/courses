describe 'clients API' do
  describe 'GET #index' do

    context 'unauthorized' do
      let!(:clients) { create_list(:client, 2)}

      before do
        do_request
      end

      it 'returns list of clients' do
        expect(response.body).to have_json_size(2)
      end
    end
  end

  def do_request(params = {})
    get '/api/v1/clients', params: { format: :json }.merge(params)
  end
end