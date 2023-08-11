class WrittenWork < ApplicationRecord
  belongs_to :artist
  has_rich_text :content
end
