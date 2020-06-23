Rails.application.routes.draw do
  devise_for :users
  get '*path', to: 'home#root', constraints: ->(request){ request.format.html? }
  root to: 'home#root'
end
