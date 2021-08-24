using System.Collections.Generic;

namespace ForgingAhead.Models
{
   public class Equipment
   {
      public string Name;
      
      public static void Create(string equipmentName)
      {
         var equipment = new Equipment();
         equipment.Name = equipmentName;
         GlobalVariables.Equipment.Add(equipment);
      }
      
      public static List<Equipment> GetAll()
      {
         return GlobalVariables.Equipment;
      }
   }
}
