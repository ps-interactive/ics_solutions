using System;
using System.Threading.Tasks;

namespace AsyncCourse
{
    public static partial class Example
    {
        public static async Task Save()
        {
            SaveUserAsync();
            SaveWorkSpaceAsync();
        }
    }
}