Rails.application.routes.draw do
  resources :events, only: [:new, :create, :update]
  resources :games, only: [:new, :create, :show]
  resources :players, only: [:new, :create]
  resources :leaderboards, only: [:show]

  root 'games#new'
end
