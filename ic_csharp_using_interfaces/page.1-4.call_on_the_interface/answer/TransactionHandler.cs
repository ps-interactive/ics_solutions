using System;
namespace InterfaceCourse
{
	public class TransactionHandler
	{
		private IRental iRental = new BikesForRent();

		public void Rent(int id)
		{
			iRental.Rent(id);
		}

		public void Return(int id)
		{
			iRental.Return(id);
		}
	}
}
