defmodule Account do
  def list_transactions({:ok, content}) do
    count = length(content)
    IO.puts("Transactions files: #{count}")
  end

  def list_transactions({:error, _}) do
    IO.puts("Error listing files")
  end
end

File.ls("transactions/") |> Account.list_transactions()
