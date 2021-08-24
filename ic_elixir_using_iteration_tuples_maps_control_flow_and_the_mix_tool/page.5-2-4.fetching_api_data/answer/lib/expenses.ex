defmodule Expenses do
  def total_spendings_FL(amount) do
    url = "go.codeschool.com/state-taxes"
    case HTTPoison.get(url) do
      {:ok, response} -> parse(response) |> calculate(amount)
      {:error, _} -> "Error fetching tax rates"
    end
  end

  defp parse(_) do
    # TODO
  end

  defp calculate(_, _) do
    # TODO
  end
end
