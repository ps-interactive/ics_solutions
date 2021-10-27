defmodule NeonWeb.EventController do
  use NeonWeb, :controller

  alias Neon.Repo
  alias Neon.Event

  import Ecto.Changeset

  def index(conn, _) do
    events = Repo.all(Event)
    render conn, "index.html", events: events
  end
  
  def create(conn, %{"event" => event_params}) do
    changeset = cast(%Event{}, event_params, [:name, :location, :start_on])
    Repo.insert(changeset)
    redirect(conn, to: Routes.event_path(conn, :index))
  end
end
