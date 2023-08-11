class VisualWork < ApplicationRecord
  before_save :split_medium
  belongs_to :artist

  def split_medium
    self.medium = self.medium.split(/\s*,\s*/)
  end
end
