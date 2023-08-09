class CreateVisualWorks < ActiveRecord::Migration[7.0]
  def change
    create_table :visual_works do |t|
      t.belongs_to :artist, null: false, foreign_key: true
      t.string :artwork
      t.string :title
      t.string :medium
      t.text :description

      t.timestamps
    end
  end
end
