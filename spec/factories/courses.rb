FactoryGirl.define do
  factory :course do
    title { Faker::Educator.course}
    full_name { title }
    description { Faker::Lorem.paragraph }
    logo { Faker::Avatar.image }
    client { client }
  end
end