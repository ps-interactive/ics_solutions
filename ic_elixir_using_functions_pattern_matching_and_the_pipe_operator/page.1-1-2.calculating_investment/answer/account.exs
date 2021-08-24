defmodule Account do
  def investment_return(initial, interest) do
    initial + (initial * interest)
  end
end

amount = Account.investment_return(1000, 0.0001)
IO.puts "Investment return: $#{amount}"
