defmodule NeonWeb.EventController do
  use NeonWeb, :controller

  alias Neon.Calendar
  alias Neon.Calendar.Event

  def index(conn, _) do
    events = Calendar.list_events
    render conn, "index.html", events: events
  end

  def show(conn, %{"id" => event_id }) do
    event = Calendar.get_event(event_id)
    render conn, "show.html", event: event
  end

  def new(conn, _) do
    changeset = Calendar.change_event(%Event{})
    render conn, "new.html", changeset: changeset
  end
end
