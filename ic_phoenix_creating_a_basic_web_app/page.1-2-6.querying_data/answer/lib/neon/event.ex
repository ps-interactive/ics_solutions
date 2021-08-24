defmodule Neon.Event do
  use Ecto.Schema
  import Ecto.Query

  schema "events" do
    field :name, :string
    field :location, :string
    field :start_on, :naive_datetime

    timestamps()
  end

  def all_within_year(target_year) do
    {:ok, start_datetime} = NaiveDateTime.new(target_year, 1,1,0,0,0)
    {:ok, end_datetime} = NaiveDateTime.new(target_year+1, 1,1,0,0,0)

    from e in __MODULE__,
      where: e.start_on > ^start_datetime and
        e.start_on < ^end_datetime
  end
end
