class AddAudioDescriptionToVisualWorks < ActiveRecord::Migration[7.0]
  def change
    add_column :visual_works, :audio_description, :string
  end
end
