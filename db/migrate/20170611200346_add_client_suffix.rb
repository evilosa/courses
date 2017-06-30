class AddClientSuffix < ActiveRecord::Migration[5.1]
  def change
    add_column :clients, :suffix, :string
  end
end
