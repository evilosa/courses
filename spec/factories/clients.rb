FactoryGirl.define do
  factory :client do
    title { Faker::Company.name}
    suffix { Faker::Company.suffix}
    full_name { "#{title} #{suffix}" }
    tax_number { Faker::Company.swedish_organisation_number }
    description { Faker::Lorem.paragraph }
    logo { Faker::Company.logo }
  end
end