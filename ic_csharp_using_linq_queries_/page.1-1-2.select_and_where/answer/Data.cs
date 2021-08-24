using System;
using System.Linq;

namespace LinqCourse
{
    public static partial class Example
    {
        public static int GetNumbers()
        {
            var numbers = new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

            var query = from number in numbers
                        where number > 6
                        select number;

            return query.Count();
        }

    }
}