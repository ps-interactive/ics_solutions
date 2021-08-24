defmodule NeonWeb.EventController do
  use NeonWeb, :controller

  alias Neon.Calendar

  def index(conn, _) do
    events = Calendar.list_events
    render conn, "index.html", events: events
  end

  def show(conn, %{"id" => event_id }) do
    event = Calendar.get_event(event_id)
    render conn, "show.html", event: event
  end
end
