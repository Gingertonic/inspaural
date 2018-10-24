class AddVolumesToInspaural < ActiveRecord::Migration[5.2]
  def change
    add_column :inspaurals, :quote1_vol, :integer
    add_column :inspaurals, :quote2_vol, :integer
    add_column :inspaurals, :quote3_vol, :integer
    add_column :inspaurals, :quote4_vol, :integer
    add_column :inspaurals, :ambience_vol, :integer
  end
end
