Rails.application.routes.draw do
  resources :games, only: [:index] do
    resources :matches, only: [:create, :show]
  end

  resources :matches, only: [:update]
  resources :players, only: [:new, :create]

  root 'players#new'
end
