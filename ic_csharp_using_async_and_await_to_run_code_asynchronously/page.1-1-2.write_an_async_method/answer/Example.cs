using System;
using System.Threading.Tasks;

namespace AsyncCourse 
{
    public static partial class Example 
    {
        public static async Task<int> Subtraction() 
        {
            var a = SlowMethodOneAsync();
            var b = SlowMethodTwoAsync();
            return await a - await b;
        }
    }
}