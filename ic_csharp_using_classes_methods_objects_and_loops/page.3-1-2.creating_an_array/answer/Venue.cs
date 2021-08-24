using System;

public class Venue
{
    public string Name;
    public Band[] Bands = new Band[2];

    public void AddBand(string name)
    {
        Band band = new Band();
        band.Name = name;
        Bands[0] = band;
    }

    public void Announce()
    {
        Console.WriteLine(Name + " will have several bands playing tonight!");
    }
}
