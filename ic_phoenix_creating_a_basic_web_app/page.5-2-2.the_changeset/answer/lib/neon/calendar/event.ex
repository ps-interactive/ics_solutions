defmodule Neon.Calendar.Event do
  use Ecto.Schema
  alias Neon.Calendar.Comment
  alias Neon.Calendar.Event
  import Ecto.Changeset

  schema "events" do
    field :name, :string
    field :location, :string
    field :start_on, :naive_datetime

    has_many :comments, Comment

    timestamps()
  end

  def changeset(%Event{} = event, attrs) do
    event
    |> cast(attrs, [:name, :location, :start_on])
  end
end
