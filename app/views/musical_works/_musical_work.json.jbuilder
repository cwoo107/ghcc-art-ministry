json.extract! musical_work, :id, :artist_id, :title, :sheet_music, :iframe, :created_at, :updated_at
json.url musical_work_url(musical_work, format: :json)
