using System.Text.Json.Serialization;

using Mapster;

using Wilcar.Api.Data;
using Wilcar.Api.Extensions;
using Wilcar.Api.Middlewares;
using Wilcar.Api.Options;
using Wilcar.Api.Models.Requests;
using Wilcar.Api.Validators;
using Wilcar.Api.Repositories.Abstractions;
using Wilcar.Api.Repositories;
using Wilcar.Api.Services.Abstractions;
using Wilcar.Api.Services;
using Wilcar.Api.Utils.Abstractions;
using Wilcar.Api.Utils;
using Wilcar.Api.Mappers;


var builder = WebApplication.CreateBuilder(args);
var config = builder.Configuration;
var logger = LoggerFactory.Create(o => o.AddConsole()).CreateLogger("Wilcar");


try
{
    builder.Services.AddControllers()
    .AddJsonOptions(ops => ops.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter()));

    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();


    var corsConfig = builder.Services.AddAndGetConfiguration<CorsConfig>(config);

    var dbConfig = builder.Services.AddAndGetConfiguration<DbConfig>(config);
    builder.Services.AddSqlServerDbContext<WilcarDbContext>(dbConfig);


    builder.Services.AddScoped<IUsersRepository, UsersRepository>();
    builder.Services.AddScoped<IUsersService, UsersService>();
    builder.Services.AddScoped<FluentValidation.IValidator<SaveUserRequest>, SaveUserRequestValidator>();

    builder.Services.AddSingleton<IHashHelper, HashHelper>();

    builder.Services.AddScoped(typeof(MapperConfig<,>));


    CookieConfig cookieConfig = config.GetSection(nameof(CookieConfig)).Get<CookieConfig>();
    builder.Services.AddSingleton(cookieConfig.Adapt<CookieOptions>());


    var app = builder.Build();

    app.Lifetime.ApplicationStopped.Register(
        () => app.Services.GetRequiredService<ILogger<Program>>().LogInformation("Application stopped."));

    app.Lifetime.ApplicationStarted.Register(
        () => app.Services.GetRequiredService<ILogger<Program>>().LogInformation("Application started."));

    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI(options =>
        {
            options.DocExpansion(Swashbuckle.AspNetCore.SwaggerUI.DocExpansion.None);
            options.DisplayRequestDuration();
        });
    }

    app.UseCors(builder =>
    {
        builder.WithOrigins(corsConfig.AllowedOrigins)
               .AllowAnyHeader()
               .AllowAnyMethod()
               .AllowCredentials();
    });

    app.UseHttpsRedirection();

    app.UseAuthorization();

    app.MapControllers();

    // app.UseMiddleware<SessionHandlerMiddleware>();
    app.UseMiddleware<ExceptionHandlerMiddleware>();

    app.Run();
}
catch (Exception ex)
{
    logger.LogError(ex, "Stopped program because of exception");
    throw;
}