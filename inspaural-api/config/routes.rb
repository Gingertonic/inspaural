Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :quotes, only: [:index]
      resources :ambiences, only: [:index]
      resources :inspaurals, only: [:index, :create, :show, :update, :destroy]
    end
  end
end
