namespace Wilcar.Api.Exceptions;

public class InvalidClientException : BaseException
{
    public sealed override string Message => "IP or user agent does not match";
}