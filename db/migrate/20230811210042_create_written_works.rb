class CreateWrittenWorks < ActiveRecord::Migration[7.0]
  def change
    create_table :written_works do |t|
      t.belongs_to :artist, null: false, foreign_key: true
      t.string :genre
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
