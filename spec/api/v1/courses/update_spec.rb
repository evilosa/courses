describe 'Course API' do
  describe 'PUT #update' do

    context 'unauthorized' do
      let!(:course) { create(:course) }
      let(:parsed_response) { JSON.parse(response.body) }

      before do
        get_request
      end

      it 'course contains initial attributes' do
        expect(parsed_response['id']).to eq(course.id)
        expect(parsed_response['title']).to eq(course.title)
        expect(parsed_response['full_name']).to eq(course.full_name)
        expect(parsed_response['description']).to eq(course.description)
      end

      it 'contain updated attributes' do
        update_request({ course: {
          title: 'New title',
          full_name: 'New full name',
          description: 'New description'}});

        expect(response.status).to eq 204

        get_request
        expect(parsed_response['title']).to eq('New title')
        expect(parsed_response['full_name']).to eq('New full name')
        expect(parsed_response['description']).to eq('New description')
      end

      it 'return 422 code to invalid attributes' do
        invalid_request({ course: {
              title: 'New title',
              full_name: {name: 'name'}}});

          expect(response.status).to eq 422
      end
    end
  end

  def invalid_request(params = {})
    put "/api/v1/courses/999999", params: { format: :json }.merge(params)
  end

  def update_request(params = {})
    put "/api/v1/courses/#{course.id}", params: { format: :json }.merge(params)
  end

  def get_request(params = {})
    get "/api/v1/courses/#{course.id}", params: { format: :json }.merge(params)
  end
end