class Course < ApplicationRecord
  validates :title, :full_name, presence: true
end