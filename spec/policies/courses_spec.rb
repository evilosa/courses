require 'rails_helper'

describe CoursePolicy do
  subject { described_class.new(user, course) }

  let!(:client) { create(:client) }
  let(:course) { create(:course, client_id: client.id)}

  context 'As a user' do
    let!(:user) { create(:user) }

    it 'can see all courses' do
      is_expected.to permit_action :index
    end

    it 'can see course details' do
      is_expected.to permit_action :show
    end

    it 'can search courses' do
      is_expected.to permit_action :search
    end

    it 'can not create, update, destroy courses' do
      is_expected.to forbid_actions [:new, :create, :update, :destroy]
    end
  end

  context 'As a client administrator' do
    let!(:user) { create(:client_user) }

    it 'can see all courses' do
      is_expected.to permit_action :index
    end

    it 'can see course detail' do
      is_expected.to permit_action :show
    end

    it 'can search courses' do
      is_expected.to permit_action :search
    end

    it 'can create courses' do
      is_expected.to permit_actions [:new, :create]
    end

    context 'as a course owner' do
      let!(:course) { create(:course, client_id: client.id)}

      it 'can update own course' do
        is_expected.to permit_action :update
      end
    end
  end
end