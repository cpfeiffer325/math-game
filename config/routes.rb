Rails.application.routes.draw do
  devise_for :players
  resources :games, path: 'games', only: [:index, :show] do
    resources :events, only: [:create, :show]
  end
  resources :events, only: [:update]
  resources :players, only: [:new, :create]
  resources :leaderboards, only: [:show]

  root 'players#new'
end
