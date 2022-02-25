using Brive.Bootcamp.PruebaApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Brive.Bootcamp.PruebaApi.DataAccess
{
    public class ProjectContext : DbContext
    {
        public ProjectContext(DbContextOptions<ProjectContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Participantes>(eb =>
            {
                eb.HasKey(c => new { c.Id });
            });

        }

        public DbSet<Participantes> Participantes { get; set; }
    }
}
