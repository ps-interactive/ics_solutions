using Microsoft.AspNetCore.Mvc;
using ForgingAhead.Models;
using System;
namespace ForgingAhead.Controllers
{
  class HomeController : Controller
  {
     public IActionResult Index()
     {
        var model = new ForgingAhead.Models.Equipment();
        model.Name = "Shield";
        return View("Index", model);
     }
  }
}
