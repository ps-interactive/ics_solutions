using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

using ForgingAhead.Models;

namespace ForgingAhead.Controllers
{
  public class QuestController : Controller
  {
    private readonly ApplicationDbContext _context;

    public QuestController(ApplicationDbContext context)
    {
      _context = context;
    }

    public IActionResult Create()
    {
      return View();
    }

    public IActionResult Create(Quest quest)
    {
      //Save Quest to Database Here
      _context.Quests.Add(quest);
      _context.SaveChanges();
      return RedirectToAction("Index");
    }

    public IActionResult Index()
    {
      return View();
    }
  }
}
