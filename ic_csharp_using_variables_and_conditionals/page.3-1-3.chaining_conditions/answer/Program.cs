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

            if(bands == 0)
            {
                Console.WriteLine("There will be no performances tonight.");
            }
            else if(bands == 1)
            {
                Console.WriteLine("It's going to be a fantastic show tonight!");
            }
            else
            {
                Console.WriteLine("There will be plenty of thrilling performances to see tonight!");
            }
        }
        else
        {
            Console.WriteLine("We were unable to determine the number of bands performing tonight, try again.");
        }
    }
}
