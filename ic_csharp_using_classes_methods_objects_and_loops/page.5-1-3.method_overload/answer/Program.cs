using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("What is the name of your venue?");
        Venue venue = new Venue();
        venue.Name = "The Jazz Hut";
        string[] bandNames = {"Jazztallica", "Jazzadeth"};
        venue.AddBand(bandNames);
        venue.Announce();
    }
}
