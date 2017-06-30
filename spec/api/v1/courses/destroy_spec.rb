describe 'Course API' do
  describe 'DELETE #remove' do

    context 'unauthorized' do
      let!(:courses) { create_list(:course, 10) }
      let!(:last) { courses.last }

      it 'remove course in database' do
        expect{ delete_request }.to change(Course, :count).by(-1)
      end
    end
  end

  def delete_request(params = {})
    delete "/api/v1/courses/#{last.id}", params: { format: :json }.merge(params)
  end
end