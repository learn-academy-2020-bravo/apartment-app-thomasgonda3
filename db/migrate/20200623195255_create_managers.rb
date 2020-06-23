class CreateManagers < ActiveRecord::Migration[6.0]
  def change
    create_table :managers do |t|
      t.string :contact
      t.string :phone
      t.string :hours

      t.timestamps
    end
  end
end
