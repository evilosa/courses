class User < ApplicationRecord
  rolify
  after_create :assign_default_role

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable, :omniauthable, :lockable

  has_many :clients_users
  has_many :clients, through: :clients_users

  def assign_default_role
    self.add_role(:user) if self.roles.blank?
  end
end
