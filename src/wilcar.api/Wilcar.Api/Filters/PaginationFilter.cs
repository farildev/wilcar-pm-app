namespace Wilcar.Api.Filters;

public class PaginationFilter
{
    public int? Page { get; set; }
    public int? Limit { get; set; }


    public PaginationFilter()
    {
        this.Page = null;
        this.Limit = null;
    }


    public PaginationFilter(int page, int limit)
    {
        this.Page = page < 1 ? 1 : page;
        this.Limit = limit > 10 ? 10 : limit;
    }
}