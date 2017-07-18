require 'rails_helper'

describe ClientPolicy do
  subject { described_class.new(user, client) }

  let(:client) {
    client = create(:client)
    client.users << user if user
    client
  }

  context 'being a guest' do
    let!(:user) { nil }

    it { is_expected.to forbid_actions([:index, :show, :new, :create, :update, :destroy]) }
  end

  context 'being a client user' do
    let!(:user) { create(:user) }

    it { is_expected.to forbid_actions([:index, :new, :create, :update, :destroy]) }
  end

  context 'being a client' do
    let(:user) { create(:client_user) }

    it 'user can see own record' do
      is_expected.to permit_action(:show)
    end

    it { is_expected.to permit_action(:update) }

    it { is_expected.to forbid_actions([:index, :new, :create, :destroy])}
  end
end