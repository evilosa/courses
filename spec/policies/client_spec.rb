require 'rails_helper'

describe ClientPolicy do
  subject { described_class.new(user, client) }

  let!(:client) { create(:client) }

  context 'being a guest' do
    let(:user) { nil }

    it { is_expected.to forbid_actions([:index, :show, :new, :create, :update, :destroy]) }
  end

end