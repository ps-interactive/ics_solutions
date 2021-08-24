defmodule NeonWeb.EventController do
  use NeonWeb, :controller

  alias Neon.Repo
  alias Neon.Event

  def index(conn, _) do
    events = Repo.all(Event)
    render conn, "index.html", events: events
  end
end
