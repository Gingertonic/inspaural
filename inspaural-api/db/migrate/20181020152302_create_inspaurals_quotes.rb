class CreateInspauralsQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :inspaurals_quotes, id: false do |t|
      t.belongs_to :inspaural, index: true
      t.belongs_to :quote, index: true
      t.timestamps
    end
  end
end
