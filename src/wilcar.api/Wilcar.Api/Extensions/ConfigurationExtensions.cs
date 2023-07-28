using Ardalis.GuardClauses;

using Microsoft.Extensions.Options;


namespace Wilcar.Api.Extensions;

public static class ConfigurationExtensions
{
    public static IServiceCollection AddConfiguration<TConfig>(this IServiceCollection services, IConfiguration configuration)
        where TConfig : class
    {
        var configSection = configuration.GetSection(typeof(TConfig).Name);
        Guard.Against.Null(configSection, nameof(configSection));

        services.Configure<TConfig>(configSection);
        services.AddSingleton<TConfig>(sp =>
        {
            var options = sp.GetRequiredService<IOptions<TConfig>>();
            Guard.Against.Null(options, nameof(options));

            return options.Value;
        });

        return services;
    }

    public static TConfig AddAndGetConfiguration<TConfig>(this IServiceCollection services, IConfiguration configuration)
        where TConfig : class
    {
        var configSection = configuration.GetSection(typeof(TConfig).Name);
        Guard.Against.Null(configSection, nameof(configSection));

        services.Configure<TConfig>(configSection);
        var configInstance = configSection.Get<TConfig>();
        Guard.Against.Null(configInstance, nameof(configInstance));
        services.AddSingleton(configInstance);

        return configInstance;
    }
}