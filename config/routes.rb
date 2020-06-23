# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      devise_for :members, controllers: { registrations: 'registrations' }
      post :auth, to: 'authentication#create'
      get '/auth' => 'authentication#fetch'
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
