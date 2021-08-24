defmodule NeonWeb.EventView do
  use NeonWeb, :view

  def state_name(location) do
    [_, state] = String.split(location, ",")
    state
  end
end
