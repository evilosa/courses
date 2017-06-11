FactoryGirl.define do
  factory :client do
    title { Faker::Company.name}
    full_name { "#{Faker::Company.name} #{Faker::Company.suffix}" }
    tax_number { Faker::Company.swedish_organisation_number }
    description { Faker::Lorem.paragraph }
    logo { Faker::Company.logo }
  end
end