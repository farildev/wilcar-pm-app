namespace Wilcar.Api.Exceptions.User;

public class DefaultUserDeletionException : BaseException
{
    public sealed override string Message => "Deletion of the default user is not allowed.";
}