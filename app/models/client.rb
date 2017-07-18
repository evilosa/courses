class Client < ApplicationRecord
  validates :title, :full_name, :tax_number, presence: true

  has_many :clients_users
  has_many :users, through: :clients_users

  has_many :courses

  def owner? user
    false
  end
end