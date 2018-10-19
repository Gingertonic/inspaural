class CreateAmbiences < ActiveRecord::Migration[5.2]
  def change
    create_table :ambiences do |t|
      t.string :name
      t.string :audioUrl

      t.timestamps
    end
  end
end
