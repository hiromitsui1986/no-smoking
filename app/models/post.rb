class Post < ApplicationRecord
  validates :brand, presence: { message: "銘柄を選択してください" }
  
end
