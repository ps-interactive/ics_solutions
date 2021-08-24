defmodule NeonWeb.Router do
  use NeonWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", NeonWeb do
    pipe_through :browser

    get "/", EventController, :index

    get "/events/new", EventController, :new
    post "/events", EventController, :create
	  get "/events/:id", EventController, :show
  end
end
