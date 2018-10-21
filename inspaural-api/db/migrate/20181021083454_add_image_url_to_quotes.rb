class AddImageUrlToQuotes < ActiveRecord::Migration[5.2]
  def change
    add_column :quotes, :imageUrl, :string
  end
end
