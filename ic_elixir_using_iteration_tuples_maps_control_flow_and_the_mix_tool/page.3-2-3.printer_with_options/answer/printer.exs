defmodule Printer do
  def greet(name, options \\ []) do
    greeting = options[:prefix] || "Hello"
    "#{greeting}, #{name}"
  end
end

Printer.greet("Carlos") |> IO.puts
Printer.greet("Sergio", prefix: "O HAI") |> IO.puts
Printer.greet("Dolores", prefix: "Olá") |> IO.puts
