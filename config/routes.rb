Rails.application.routes.draw do
  resources :players, only: [:new, :create]
  resources :games, only: [:new, :create, :show]
  resources :stats, only: [:new, :create, :show]

  root 'games#new'
end
