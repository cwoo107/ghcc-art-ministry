class Artist < ApplicationRecord
  has_many :visual_works, dependent: :destroy
  has_many :written_works, dependent: :destroy
  has_many :musical_works, dependent: :destroy
end
