class AddBrandToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :brand, :string
  end
end
