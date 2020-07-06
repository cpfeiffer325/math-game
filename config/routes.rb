Rails.application.routes.draw do
  resources :games, only: [:new, :create, :show]

  root 'games#new'
end
