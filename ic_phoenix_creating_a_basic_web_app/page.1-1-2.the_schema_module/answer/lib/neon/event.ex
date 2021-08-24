defmodule Neon.Event do
  use Ecto.Schema

  schema "events" do
    field :name, :string
    field :location, :string
    field :start_on, :naive_datetime

    timestamps()
  end
end
