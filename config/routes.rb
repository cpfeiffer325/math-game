Rails.application.routes.draw do
  resources :events, only: [:new, :create, :update]
  resources :games, only: [:new, :create, :show]
  resources :players, only: [:new, :create]

  root 'games#new'
end
