RSpec.describe Course, type: :model do
  it { should validate_presence_of :title }
  it { should validate_presence_of :full_name }
  it { should validate_presence_of :client_id }

  it { should belong_to :client }
end