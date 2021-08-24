using System;
using System.Collections.Generic;

public class Venue
{
    public string Name;
    public List<Band> Bands = new List<Band>();

    public void AddBand(string name)
    {
        Band band = new Band();
        band.Name = name;
        Bands.Add(band);
    }

    public void Announce()
    {
        Console.WriteLine(Name + " will have " + Bands.Count + " bands playing tonight!");

        foreach(var band in Bands)
        {
            band.Announce();
        }
    }
}
