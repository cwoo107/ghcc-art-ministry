class AddOrientationToVisualWorks < ActiveRecord::Migration[7.0]
  def change
    add_column :visual_works, :orientation, :string
  end
end
