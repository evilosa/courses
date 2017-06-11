require 'factory_girl_rails'

40.times { FactoryGirl.create(:client) } unless Client.any?