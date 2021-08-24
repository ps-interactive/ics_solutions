using System;

namespace InterfaceCourse
{
    public class BikesForRent : IRental
    {
        public void Rent(int id)
        {
            Console.WriteLine("Bike {0} has been rented out.", id);
        }

        public void Return(int id)
        {
            throw new NotImplementedException();
        }
    }
}
