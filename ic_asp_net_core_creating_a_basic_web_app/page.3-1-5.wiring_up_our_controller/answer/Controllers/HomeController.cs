using Microsoft.AspNetCore.Mvc;
using ForgingAhead.Models;

namespace ForgingAhead.Controllers
{
   public class HomeController : Controller
   {
     public IActionResult Index()
     {
        return View(Equipment.GetAll());
     }

     public IActionResult Create(string equipmentName)
     {
        Equipment.Create(equipmentName);
      
        return RedirectToAction("Index");
     }
      
   }
}
