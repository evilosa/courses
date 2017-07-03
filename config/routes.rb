Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'api/v1/sessions' }

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  namespace :api do
    namespace :v1 do
      resources :clients, only: [:index, :show, :create, :update, :destroy] do
        get 'search', on: :collection
      end

      resources :courses, only: [:index, :show, :create, :update, :destroy]

      get 'is_signed_in', to: 'auth#is_signed_in?'
    end
  end

  get '*path', to: 'home#index'
end
