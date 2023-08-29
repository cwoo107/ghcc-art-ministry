class VisualWork < ApplicationRecord
  before_save :split_medium
  belongs_to :artist
  has_rich_text :content


  def split_medium
    self.medium = self.medium.split(/\s*,\s*/)
  end
end
