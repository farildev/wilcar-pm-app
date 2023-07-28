using Mapster;


namespace Wilcar.Api.Mappers;

public class MapperConfig<TSource, TDestination>
{
    public MapperConfig()
    {
        this.Config = new TypeAdapterConfig();


        this.Config.ForType<TSource, TDestination>()
                   .IgnoreNullValues(true);

        this.Config.ForType<IEnumerable<TSource>, List<TDestination>>()
                   .MapWith(src => src.Adapt<List<TDestination>>());

        this.Config.ForType<IEnumerable<TDestination>, List<TSource>>()
                   .MapWith(src => src.Adapt<List<TSource>>());
    }


    public TypeAdapterConfig Config { get; }
}