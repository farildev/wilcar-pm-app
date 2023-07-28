namespace Wilcar.Api.Exceptions.User;

public class UserNotFoundException : BaseException
{
    public sealed override string Message => "User not found";
}