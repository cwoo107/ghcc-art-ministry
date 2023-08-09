class CreateArtists < ActiveRecord::Migration[7.0]
  def change
    create_table :artists do |t|
      t.string :first_name
      t.string :last_name
      t.string :art_medium
      t.text :bio

      t.timestamps
    end
  end
end
