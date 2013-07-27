ErinMahoneyPhotoCom::Application.routes.draw do
  get "/series/:name" => "series#show", as: :series
  get "/about"        => "application#about", as: :about
  get "/contact"      => "application#contact", as: :contact
  get "/"             => "application#index"
end
