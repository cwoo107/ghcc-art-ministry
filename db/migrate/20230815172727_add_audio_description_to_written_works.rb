class AddAudioDescriptionToWrittenWorks < ActiveRecord::Migration[7.0]
  def change
    add_column :written_works, :audio_description, :string
  end
end
