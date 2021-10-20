using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.InMemory;

namespace ForgingAhead.Models
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Character> Characters { get; set; }
        public DbSet<Equipment> Equipment { get; set; }
        public DbSet<Quest> Quests { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseInMemoryDatabase("ForgingAhead");
            base.OnConfiguring(options);
        }
    }
}

