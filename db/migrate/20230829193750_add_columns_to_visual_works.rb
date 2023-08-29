class AddColumnsToVisualWorks < ActiveRecord::Migration[7.0]
  def change
    add_column :visual_works, :for_sale, :boolean
    add_column :visual_works, :price, :float
  end
end
