using Wilcar.Api.Filters;
using Wilcar.Api.Models.Responses;


namespace Wilcar.Api.Helpers;

public static class PaginationHelper
{
    public static PagedResponse<List<T>> CreatePagedResponse<T>(List<T> pagedData, PaginationFilter validFilter)
    {
        return new(pagedData, validFilter.Page.Value, validFilter.Limit.Value);
    }
}