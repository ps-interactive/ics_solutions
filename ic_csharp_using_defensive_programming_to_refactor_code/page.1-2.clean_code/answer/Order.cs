using System;

namespace RefactorCourse
{
    public class Order
    {
        public Guid OrderId { get; set; }
        public bool Paid { get; set; } = false;
        public decimal Amount { get; set; } = 0;

        public Order(decimal amount)
        {
            OrderId = new Guid();
            Amount = amount;
        }
        
        public decimal GetTaxes()
        {
            return Amount * (decimal)0.06;
        }

        public decimal GetShippingAndHandling(int distance, int weight)
        {
            return distance * weight * (decimal)1.25;
        }

        public decimal GetTotal(int distance, int weight)
        {
            var total = Amount;
            total += GetTaxes();
            total += GetShippingAndHandling(distance, weight);
            return total;
        }
    }
}
