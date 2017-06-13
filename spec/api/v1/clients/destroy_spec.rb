describe 'Client API' do
  describe 'DELETE #destroy' do

    context 'unauthorized' do
      let!(:clients) { create_list(:client, 10) }
      let!(:last) { clients.last }

      it 'destroy client in database' do
        expect{ delete_request }.to change(Client, :count).by(-1)
      end
    end
  end

  def delete_request(params = {})
    delete "/api/v1/clients/#{last.id}", params: { format: :json }.merge(params)
  end
end