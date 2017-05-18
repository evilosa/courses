RSpec.describe Client, type: :model do
  it { should validate_presence_of :title }
  it { should validate_presence_of :full_name }
  it { should validate_presence_of :tax_number }

  it { should have_many :users}
  it { should have_many :courses }
end