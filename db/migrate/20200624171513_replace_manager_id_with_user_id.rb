class ReplaceManagerIdWithUserId < ActiveRecord::Migration[6.0]
  def change
    remove_column :apartments, :manager_id
    add_column :apartments, :user_id, :integer
  end
end
