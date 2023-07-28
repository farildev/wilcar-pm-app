namespace Wilcar.Api.Models.Responses;

public class PagedResponse<T>
{
    public int Page { get; set; }
    public int Limit { get; set; }
    public T Data { get; set; }


    public PagedResponse(T data, int page, int limit)
    {
        this.Page = page;
        this.Limit = limit;
        this.Data = data;
    }
}