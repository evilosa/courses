RSpec.describe Course, type: :model do
  it { should validate_presence_of :title }
  it { should validate_presence_of :full_name }
end