describe 'Course API' do
  describe 'POST #create' do

    let(:valid_params) { { course: attributes_for(:course), format: :json } }
    let(:invalid_params) { { course: attributes_for(:course, title: nil), format: :json } }

    let!(:create_course) do
      Proc.new do |params = valid_params|
        post '/api/v1/courses', params: params
      end
    end

    context 'with valid attributes' do
      before { create_course.call }

      it 'save course in database' do
        expect{ create_course.call }.to change(Course, :count).by(1)
      end
    end

    context 'with invalid attributes' do
      it 'not save in database' do
        expect(response.status).to eq 422
        expect{ create_course.call(invalid_params) }.not_to change(Course, :count)
      end
    end
  end
end
