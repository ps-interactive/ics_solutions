defmodule NeonWeb.EventController do
  use NeonWeb, :controller

  def index(conn, _) do
    text conn, "events"
  end
end
