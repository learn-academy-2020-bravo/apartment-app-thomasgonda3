class AddFieldsToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :contact, :string
    add_column :users, :phone, :string
    add_column :users, :hours, :string
  end
end
