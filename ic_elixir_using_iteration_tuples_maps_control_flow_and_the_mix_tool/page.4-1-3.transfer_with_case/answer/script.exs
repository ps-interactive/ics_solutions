defmodule Account do
  def transfer_amount(from, to, amount) do
    if amount < 5000 do
      do_transfer(from, to, amount)
      { :ok, amount }
    else
      { :error, "Invalid Transfer" }
    end
  end

  defp do_transfer(_from, _to, _amount) do
    IO.puts "Transfer done!"
  end
end

from = 123123
to = 123124
amount = 100.00

case Account.transfer_amount(from, to, amount) do
  { :ok, value } -> IO.puts "Transferred: $#{value}"
  { :error, message } -> IO.puts "Error: #{message}"
end
