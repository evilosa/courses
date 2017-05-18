FactoryGirl.define do
  factory :client do
    title { Faker::Company.name}
    full_name { Faker::Lorem.sentence }
    tax_number { Faker::Number.between(100000, 200000) }
    description { Faker::Lorem.paragraph }
  end
end