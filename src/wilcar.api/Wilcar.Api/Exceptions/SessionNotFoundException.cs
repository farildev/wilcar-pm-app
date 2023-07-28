namespace Wilcar.Api.Exceptions;

public class SessionNotFoundException : BaseException
{
    public sealed override string Message => "Session not found";
}