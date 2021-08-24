deposit = fn(balance, amount) -> balance + amount end
withdrawal = fn(balance, amount) -> balance - amount end

defmodule Account do
  def run_transaction(balance, amount, transaction) do
    if amount > 10000 do
      "Cannot perform transaction"
    else
      transaction.(balance, amount)
    end
  end
end

deposit_result = Account.run_transaction(1000, 500, deposit)
IO.puts "New balance: US$#{deposit_result}"
withdrawal_result = Account.run_transaction(1000, 30, withdrawal)
IO.puts "New balance: US$#{withdrawal_result}"
