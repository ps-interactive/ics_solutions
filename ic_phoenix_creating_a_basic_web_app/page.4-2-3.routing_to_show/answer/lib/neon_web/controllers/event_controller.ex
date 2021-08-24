defmodule NeonWeb.EventController do
  use NeonWeb, :controller

  alias Neon.Repo
  alias Neon.Event

  def show(conn, %{"id" => event_id}) do
    event = Repo.get(Event, event_id) |> Repo.preload(:comments)
    render conn, "show.html", event: event
  end
end
