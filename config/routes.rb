Rails.application.routes.draw do
  devise_for :views
  devise_for :admins, skip: :registrations

  devise_scope :admin do
    authenticated :admin do
      get 'admins/sign_up' => 'admins/registrations#new', as: :new_admin_registration
      post 'admins' => 'admins/registrations#create', as: :admin_registration
    end
  end
  resources :written_works
  get 'home/index'
  resources :visual_works
  resources :artists
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"
end
