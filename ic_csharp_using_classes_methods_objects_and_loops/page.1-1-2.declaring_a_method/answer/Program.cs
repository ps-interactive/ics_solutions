using System;

public class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("What is the name of your venue?");
        string venue = args[0]; // Sets the venue based on the command-line argument. We'll cover arrays in Level 3!
        Console.WriteLine(Announce(venue));
    }

    static string Announce(string venue)
    {
        return venue + " will have bands performing tonight.";
    }
}
