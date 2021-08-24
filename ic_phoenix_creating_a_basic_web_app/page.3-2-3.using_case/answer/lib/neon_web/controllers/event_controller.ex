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
  
  def create(conn, %{"event" => event_params}) do
    changeset = cast(%Event{}, event_params, [:name, :location, :start_on])
    case Repo.insert(changeset) do
      {:ok, _} ->
        conn
          |> put_flash(:info, "Successfully added new event")
          |> redirect(to: event_path(conn, :index))
      {:error, changeset} ->
        conn
          |> put_flash(:error, "Error adding new event")
          |> render("new.html", changeset: changeset)
    end
  end
end
