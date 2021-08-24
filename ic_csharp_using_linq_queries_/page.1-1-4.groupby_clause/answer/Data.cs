using System;
using System.Linq;
using System.Collections;
using System.Collections.Generic;

namespace LinqCourse
{
    public static partial class Example
    {

        public static void GetUsers(List<User> users)
        {
            var userQuery = from user in users
                            group user by user.Active into userGroup
                            select userGroup;

            foreach (var userGroup in userQuery)
            {
                Console.WriteLine("Active: {0}", userGroup.Key);
                foreach (var user in userGroup)
                {
                    Console.WriteLine(user.Name);
                }
            }
        }

    }
}