json.extract! written_work, :id, :artist_id, :genre, :title, :description, :created_at, :updated_at
json.url written_work_url(written_work, format: :json)
