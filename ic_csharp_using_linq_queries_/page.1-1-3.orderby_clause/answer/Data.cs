using System;
using System.Collections.Generic;
using System.Linq;

namespace LinqCourse
{
    public static partial class Example
    {

        public static IEnumerable<int> GetNumbers()
        {
            var numbers = new int[] { 9, 1, 5, 8, 6, 7, 3, 2, 0, 4 };

            var query = from number in numbers
                        orderby number ascending
                        select number;

            return query;
        }

    }
}