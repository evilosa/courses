shared_examples_for 'API authenticable' do
  context 'unauthorized' do
    it 'returns 401 status if there is no JWT token' do
      do_request
      expect(response.status).to eq 401
    end
  end
end