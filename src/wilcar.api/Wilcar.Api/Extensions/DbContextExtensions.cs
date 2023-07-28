using Wilcar.Api.Options;
using Microsoft.EntityFrameworkCore;


namespace Wilcar.Api.Extensions;

public static class DbContextExtensions
{
    public static IServiceCollection AddSqlServerDbContext<TContext>(this IServiceCollection services, DbConfig dbConfig)
        where TContext : DbContext
    {
        services.AddDbContext<TContext>(options => options.UseSqlServer(dbConfig.SQLServer));

        return services;
    }
}