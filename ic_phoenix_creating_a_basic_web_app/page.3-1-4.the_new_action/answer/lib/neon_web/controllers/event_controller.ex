defmodule NeonWeb.EventController do
  use NeonWeb, :controller

  alias Neon.Repo
  alias Neon.Event

  import Ecto.Changeset

  def index(conn, _) do
    events = Repo.all(Event)
    render conn, "index.html", events: events
  end

  def new(conn, _) do
    changeset = change(%Event{})
    render conn, "new.html", changeset: changeset
  end
end
