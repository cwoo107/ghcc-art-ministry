class VisualWorkResource < Madmin::Resource
  # Attributes
  attribute :id, form: false
  attribute :artwork
  attribute :title
  attribute :medium
  attribute :description
  attribute :created_at, form: false
  attribute :updated_at, form: false
  attribute :orientation
  attribute :audio_description

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
