Rails.application.routes.draw do
  resources :likes
  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations"
  }

  get "pages/home"
  get "about", to: "about#index"
  resources :posts do
    resources :likes
    resources :comments
  end

  get "up" => "rails/health#show", as: :rails_health_check

  root "pages#home"
end
