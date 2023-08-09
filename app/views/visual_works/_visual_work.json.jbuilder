json.extract! visual_work, :id, :artist_id, :artwork, :title, :medium, :description, :created_at, :updated_at
json.url visual_work_url(visual_work, format: :json)
