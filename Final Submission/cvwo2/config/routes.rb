Rails.application.routes.draw do
  root 'sessions#index'

  get '/auth/:provider/callback' => 'sessions#omniauth'
  get '/new' => 'tasks#new'
  get '/home' => 'tasks#index'
  get '/tasks/:id' => 'tasks#show'
  get ':tag' => 'tasks#index'
  get '/' => 'sessions#destroy'

  resources :users
  resources :tasks

end
