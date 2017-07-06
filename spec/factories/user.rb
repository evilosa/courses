FactoryGirl.define do
  factory :user do
    email { Faker::Internet.email }
    password '12345678'
    password_confirmation '12345678'
    confirmed_at Time.now

    factory :admin_user do
      after(:create) {|user| user.add_role(:admin)}
    end

    factory :client_user do
      after(:create) {|user| user.add_role(:client)}
    end

  end
end