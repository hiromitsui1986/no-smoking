Rails.application.routes.draw do
  root "posts#index"
  resources :posts, only: [:index, :new, :create, :destroy, :edit, :update] do
    collection do
      get 'top'
    end
  end

end
