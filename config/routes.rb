Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :create]
      resources :matches, only: [:index, :create, :show, :update, :destroy]
      resources :players, only: [:index, :new, :create, :show]
    end
  end

  get "*path", to: "pages#index", via: :all
end
