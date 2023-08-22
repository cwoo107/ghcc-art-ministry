class WrittenWorkResource < Madmin::Resource
  # Attributes
  attribute :id, form: false
  attribute :genre
  attribute :title
  attribute :description
  attribute :created_at, form: false
  attribute :updated_at, form: false
  attribute :audio_description
  attribute :content, index: false

  # Associations
  attribute :artist

  # Uncomment this to customize the display name of records in the admin area.
  # def self.display_name(record)
  #   record.name
  # end

  # Uncomment this to customize the default sort column and direction.
  # def self.default_sort_column
  #   "created_at"
  # end
  #
  # def self.default_sort_direction
  #   "desc"
  # end
end
