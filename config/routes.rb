Rails.application.routes.draw do
  resources :games, only: [:show]

  root 'games#show'
end
