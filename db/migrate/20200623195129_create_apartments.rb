class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|
      t.integer :manager_id
      t.string :street
      t.string :city
      t.integer :zip
      t.string :state
      t.string :country

      t.timestamps
    end
  end
end
