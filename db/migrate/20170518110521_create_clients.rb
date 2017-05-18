class CreateClients < ActiveRecord::Migration[5.1]
  def change
    create_table :clients do |t|
      t.string :title
      t.string :full_name
      t.string :tax_number
      t.string :description

      t.timestamps
    end
  end
end
