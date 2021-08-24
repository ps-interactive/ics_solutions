using System;
using System.Threading.Tasks;

namespace AsyncCourse
{
    public static partial class Example
    {
        public static int Subtraction()
        {
            var a = SlowMethodOneAsync().Result;
            var b = SlowMethodTwoAsync().Result;

            return (a - b);
        }
    }
}