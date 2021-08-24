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

    [HttpGet]
    public IActionResult Create()
    {
      return View();
    }

    [HttpPost]
    public IActionResult Create(Quest quest)
    {
      if(_context.Quests.Any(e => e.Name == quest.Name))
      {
        // Check for existing quest here
        ModelState.AddModelError("Name", "Name is already in use.");
      }
      if(!ModelState.IsValid)
        return View(quest);
      _context.Quests.Add(quest);
      _context.SaveChanges();

      return RedirectToAction("Index");
    }

    [HttpGet]
    public IActionResult Index()
    {
      ViewData["Title"] = "Quests";
      var model = _context.Quests.ToList();
      return View(model);
    }

    [HttpGet]
    [Route("Quest/{name}/Details")]
    public IActionResult Details(string name)
    {
      var model = _context.Quests.FirstOrDefault(e => e.Name == name);
      return View(model);
    }

    [HttpGet]
    [Route("Quest/{name}/Edit")]
    public IActionResult Edit(string name)
    {
      var model = _context.Quests.FirstOrDefault(e => e.Name == name);
      return View(model);
    }

    [HttpPost]
    public IActionResult Update(Quest quest)
    {
      _context.Entry(quest).State = EntityState.Modified;
      _context.SaveChanges();
      return RedirectToAction("Index");
    }

    [HttpPost]
    public IActionResult Delete(string name)
    {
      var quest = _context.Quests.FirstOrDefault(e => e.Name == name);
      _context.Quests.Remove(quest);
      _context.SaveChanges();
      return RedirectToAction("Index");
    }
  }
}
