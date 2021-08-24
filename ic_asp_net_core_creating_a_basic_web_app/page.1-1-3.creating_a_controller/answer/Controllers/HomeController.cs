using Microsoft.AspNetCore.Mvc;
using System;

namespace ForgingAhead.Controllers
{
   public class HomeController : Controller
   {
     public IActionResult Index()
     {
       var name = "Shield";
       
       return View("Index", name);
     }
   }
}
