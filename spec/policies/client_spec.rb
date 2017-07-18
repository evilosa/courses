require 'rails_helper'

describe ClientPolicy do
  context 'User is client owner' do
    subject { described_class.new(user, client) }

    let(:client) {
      client = create(:client)
      client.users << user if user
      client
    }

    context 'as a user' do
      let!(:user) { create(:user) }

      it 'can see own record' do
        is_expected.to permit_action :show
      end

      it 'can not see list, create, edit, destroy, search clients' do
        is_expected.to forbid_actions([:index, :new, :create, :update, :destroy, :search])
      end
    end

    context 'as a client admin' do
      let(:user) { create(:client_user) }

      it 'user can see own record' do
        is_expected.to permit_action(:show)
      end

      it 'user can update own record' do
        is_expected.to permit_action(:update)
      end

      it 'can not see, search other clients, create, destroy items' do
        is_expected.to forbid_actions([:index, :new, :create, :destroy, :search])
      end
    end

    context 'as a superuser' do
      let(:user) { create(:admin_user) }

      it 'can do everything' do
        is_expected.to permit_actions([:index, :show, :new, :create, :update, :destroy, :search])
      end
    end
  end

  context 'User is not client owner' do
    subject { described_class.new(user, client) }

    let!(:client) { client = create(:client) }

    context 'as a guest' do
      let!(:user) { nil }

      it { is_expected.to forbid_actions([:index, :new, :show, :create, :update, :destroy, :search]) }
    end

    context 'as a default user' do
      let!(:user) { create(:user) }

      it { is_expected.to forbid_actions([:index, :new, :show, :create, :update, :destroy, :search]) }
    end

    context 'as a client admin' do
      let!(:user) { create(:client_user) }

      it { is_expected.to forbid_actions([:index, :new, :show, :create, :update, :destroy, :search]) }
    end

    context 'as a superuser' do
      let!(:user) { create(:admin_user) }

      it 'can do everything' do
        is_expected.to permit_actions([:index, :show, :new, :create, :update, :destroy, :search])
      end
    end
  end

end