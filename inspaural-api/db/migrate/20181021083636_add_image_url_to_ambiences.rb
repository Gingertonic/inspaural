class AddImageUrlToAmbiences < ActiveRecord::Migration[5.2]
  def change
    add_column :ambiences, :imageUrl, :string
  end
end
