class Course < ApplicationRecord
  validates :title, :full_name, :client_id, presence: true

  belongs_to :client
end