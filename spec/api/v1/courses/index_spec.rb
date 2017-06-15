describe 'Course API' do
  describe 'GET #index' do

    context 'unauthorized' do
      let!(:courses) { create_list(:course, 2)}

      before do
        do_request
      end

      it 'returns list of courses' do
        expect(response.body).to have_json_size(2)
      end
    end
  end

  def do_request(params = {})
    get '/api/v1/courses', params: { format: :json }.merge(params)
  end
end