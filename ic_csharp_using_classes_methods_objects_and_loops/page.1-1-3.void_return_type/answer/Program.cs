using System;

public class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("What is the name of your venue?");
        string venue = args[0];
        Announce(venue);
    }

    static void Announce(string venue)
    {
        Console.WriteLine(venue + " will have bands performing tonight.");
    }
}
