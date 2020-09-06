Rails.application.routes.draw do
  resources :games, path: 'games', only: [:new, :create] do
    resources :events, only: [:new, :create, :show, :update]
  end
  resources :players, only: [:new, :create]
  resources :leaderboards, only: [:show]

  root 'games#new'
end
