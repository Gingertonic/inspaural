class CreateInspaurals < ActiveRecord::Migration[5.2]
  def change
    create_table :inspaurals do |t|
      t.string :name
      t.integer :user_id
      t.integer :ambience_id

      t.timestamps
    end
  end
end
