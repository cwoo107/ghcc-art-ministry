class Artist < ApplicationRecord
  has_many :visual_works
  has_many :written_works
end
