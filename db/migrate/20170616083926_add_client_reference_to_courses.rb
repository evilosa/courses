class AddClientReferenceToCourses < ActiveRecord::Migration[5.1]
  def change
    add_reference :courses, :client, index: true
  end
end
