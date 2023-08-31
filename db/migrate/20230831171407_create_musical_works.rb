class CreateMusicalWorks < ActiveRecord::Migration[7.0]
  def change
    create_table :musical_works do |t|
      t.belongs_to :artist, null: false, foreign_key: true
      t.string :title
      t.string :sheet_music
      t.string :iframe

      t.timestamps
    end
  end
end
