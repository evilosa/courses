class CreateClientsUsersTable < ActiveRecord::Migration[5.1]
  def change
    create_table :clients_users do |t|
      t.references :client
      t.references :user
    end
  end
end
