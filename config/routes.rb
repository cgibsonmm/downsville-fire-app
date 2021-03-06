# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  get 'welcome/index'
  root 'welcome#index'

  get 'admin/index'
  devise_for :members, controllers: { registrations: 'registrations' }
  namespace :api do
    namespace :v1 do
      post :auth, to: 'authentication#create'
      get '/auth' => 'authentication#fetch'
      resources :events
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
