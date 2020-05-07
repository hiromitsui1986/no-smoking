class RemoveNumberFromPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :number, :integer
  end
end
