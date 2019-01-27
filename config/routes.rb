Rails.application.routes.draw do
  root to: "pages#root"

  resources :people, only: [] do
    collection do
      get '/', to: "pages#root"
      get :fetch
    end
  end
end
