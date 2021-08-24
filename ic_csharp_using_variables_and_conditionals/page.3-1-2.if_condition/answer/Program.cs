using System;

public class Program
{
    static void Main(string[] args)
    {
        string venue = args[0];
        string bandArgument = args[1];
        int bands = 0;

        if(int.TryParse(bandArgument, out bands))
        {
            Console.WriteLine(venue + " will have " + bands + " bands performing tonight!");
        }
        else
        {
            Console.WriteLine("We were unable to determine the number of bands performing tonight, try again."); 
        }
    }
}
