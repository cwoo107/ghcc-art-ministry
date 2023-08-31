class WrittenWork < ApplicationRecord
  belongs_to :artist
  has_rich_text :content
  has_rich_text :artist_description

end
