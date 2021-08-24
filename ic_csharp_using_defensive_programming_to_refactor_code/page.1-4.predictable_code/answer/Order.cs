using System;
using System.IO;

namespace RefactorCourse
{
    [Serializable]
    public class Order
    {
        public int OrderId { get; set; }
        public bool Paid { get; set; } = false;
        public decimal Amount { get; set; } = 0;

        public static Order Load(int id)
        {
            var path = id + ".order";
            using (Stream stream = File.Open(path, FileMode.Open))
            {
                var binaryFormatter = new System.Runtime.Serialization.Formatters.Binary.BinaryFormatter();
                return (Order)binaryFormatter.Deserialize(stream);
            }
        }

        public static void SetAsPaid(int id)
        {
            Order order = Load(id);
            order.Paid = true;
            order.Save();
        }

        public void Save()
        {
            var path = OrderId + ".order";
            using (Stream stream = File.Open(path, FileMode.Create))
            {
                var binaryFormatter = new System.Runtime.Serialization.Formatters.Binary.BinaryFormatter();
                binaryFormatter.Serialize(stream, this);
            }
        }

        public double GetShippingAndHandling(int distance, int weight)
        {
            if (weight < 1) weight = 1;
            if (distance < 1) distance = 1;

            return distance * weight * 1.25;
        }
    }
}
