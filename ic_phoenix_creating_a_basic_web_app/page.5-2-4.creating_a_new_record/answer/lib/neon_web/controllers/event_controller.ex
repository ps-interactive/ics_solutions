defmodule NeonWeb.EventController do
  use NeonWeb, :controller

  alias Neon.Calendar
  alias Neon.Calendar.Event

  def create(conn, %{"event" => event_params}) do
    case Calendar.create_event(event_params) do
      {:ok, _} ->
         conn
           |> put_flash(:info, "New event created successfully")
           |> redirect(to: event_path(conn, :index))
      {:error, changeset} ->
         conn
           |> put_flash(:error, "Error adding new event")
           |> render("new.html", changeset: changeset)
      end
   end

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
