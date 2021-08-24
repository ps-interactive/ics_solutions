using System;
using System.Data.SqlClient;

namespace ExceptionsCourse
{
    public static partial class Example
    {
        public static void UpdateUser()
        {
            try
            {
                UpdateUserData();
            }
            catch (SqlException ex)
            {
                Log.AlertEveryone(ex);
                throw;
            }
            catch (Exception ex)
            {
                Log.Error(ex);
                throw;
            }
            finally
            {
                DisposeOfDatabaseConnection();
            }
        }
    }
}