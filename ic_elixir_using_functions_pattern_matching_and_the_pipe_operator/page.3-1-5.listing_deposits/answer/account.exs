defmodule Account do
  def list_deposits(deposits) do
    list_deposits(deposits, :asc)
  end

  def list_deposits(deposits, :asc) do
    sort_asc(deposits) |> list
  end

  def list_deposits(deposits, :desc) do
    sort_desc(deposits) |> list
  end
  
  def sort_desc(deposits) do
    Enum.sort(deposits, &(&1 > &2))
  end

  def sort_asc(deposits) do
    Enum.sort(deposits, &(&1 < &2))
  end

  def list(sorted_deposits) do
    IO.inspect Enum.map(sorted_deposits, &("US$#{&1}"))
  end
end

Account.list_deposits([9.50,5.0,13.0,3.0,1.0])
