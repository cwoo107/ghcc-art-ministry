Rails.application.routes.draw do
  resources :written_works
  get 'home/index'
  resources :visual_works
  resources :artists
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"
end
