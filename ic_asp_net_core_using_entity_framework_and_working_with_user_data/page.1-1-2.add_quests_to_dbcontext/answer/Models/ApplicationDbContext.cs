using System;
using Microsoft.EntityFrameworkCore;

namespace ForgingAhead.Models
{
  public class ApplicationDbContext : DbContext
  {
    public DbSet<Character> Characters { get; set; }
    public DbSet<Equipment> Equipment { get; set; }
    public DbSet<Quest> Quests { get; set; }
  }
}
