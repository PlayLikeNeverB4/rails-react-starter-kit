Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'welcome#index'

  resources :people, only: [] do
    collection do
      get :fetch_initial_data
    end
  end
end
