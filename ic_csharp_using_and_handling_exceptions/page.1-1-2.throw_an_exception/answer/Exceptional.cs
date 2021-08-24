using System;

namespace ExceptionsCourse
{
    public static partial class Example
    {

        public static void Payment(int amount)
        {
            if (amount <= 0)
            {
                throw new ArgumentException("Payments cannot be zero or less.");
            }
        }
        
    }
}