describe 'Course API' do
  describe 'GET #show' do

    context 'unauthorized' do
      let!(:course) { create(:course) }
      let(:parsed_response) { JSON.parse(response.body) }

      before do
        do_request
      end

      it 'course contains attributes' do
        expect(parsed_response['id']).to eq(course.id)
        expect(parsed_response['title']).to eq(course.title)
        expect(parsed_response['full_name']).to eq(course.full_name)
        expect(parsed_response['description']).to eq(course.description)
      end
    end
  end

  def do_request(params = {})
    get "/api/v1/courses/#{course.id}", params: { format: :json }.merge(params)
  end
end