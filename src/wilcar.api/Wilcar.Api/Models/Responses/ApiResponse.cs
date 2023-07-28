namespace Wilcar.Api.Models.Responses;

public class ApiResponse<T>
{
    public T? Payload { get; set; }

    public bool Result { get; set; }

    public string? Message { get; set; }
}

public class ApiResponse : ApiResponse<object> { }