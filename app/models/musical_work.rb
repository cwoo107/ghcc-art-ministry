class MusicalWork < ApplicationRecord
  #before_save :split_urls

  belongs_to :artist
  has_rich_text :description

  #def split_urls
  #self.sheet_music = self.sheet_music.split(/\s*,\s*/)
  #end

end
