using Microsoft.EntityFrameworkCore;

using Wilcar.Api.Data.Entities;


namespace Wilcar.Api.Data;

public class WilcarDbContext : DbContext
{
    public const string Schema = "Wilcar";

    public WilcarDbContext(DbContextOptions<WilcarDbContext> options) 
        : base(options) 
    { 
    
    }


    public DbSet<User> Users { get; set; }
    public DbSet<Token> Tokens { get; set; }
    public DbSet<Session> Sessions { get; set; }


    protected sealed override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasDefaultSchema(Schema);
    }
}