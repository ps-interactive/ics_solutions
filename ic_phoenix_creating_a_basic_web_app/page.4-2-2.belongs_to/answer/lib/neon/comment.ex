defmodule Neon.Comment do
  use Ecto.Schema

  schema "comments" do
    field :body, :string
    field :author, :string

    belongs_to :event, Neon.Event

    timestamps()
  end
end
