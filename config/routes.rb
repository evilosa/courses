Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  namespace :api do
    namespace :v1 do
      resources :clients, only: [:index, :create, :destroy, :update]
      resources :courses, only: [:index, :create, :destroy, :update]
    end
  end

  get '*path', to: 'home#index'
end
