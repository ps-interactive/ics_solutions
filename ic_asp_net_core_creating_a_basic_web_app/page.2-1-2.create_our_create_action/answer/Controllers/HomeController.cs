using Microsoft.AspNetCore.Mvc;
using ForgingAhead.Models;

namespace ForgingAhead.Controllers
{
   public class HomeController : Controller
   {
     public IActionResult Index()
     {
        Equipment model = new Equipment();
        model.Name = "Shield";
        return View("Index", model);
     }

     public IActionResult Create(string equipmentName)
     {
        var model = new ForgingAhead.Models.Equipment();
        model.Name = equipmentName;
        return View("Index", model);
     }
   }
}
