using Wilcar.Api.Constants;
using Wilcar.Api.Models.Responses;
using Wilcar.Api.Exceptions;
using Wilcar.Api.Exceptions.User;


namespace Wilcar.Api.Middlewares;

public class SessionHandlerMiddleware
{
    private readonly string _sessionKey = Cookies.SESSION_KEY;
    private readonly string _refreshTokenKey = Cookies.REFRESHTOKEN_KEY;

    private static readonly IReadOnlyDictionary<Type, ApiResponse> _exceptionResponses = new Dictionary<Type, ApiResponse>()
    {
        { typeof(SessionNotFoundException), new ApiResponse { Result = false, Message = new SessionNotFoundException().Message } },
        { typeof(InvalidClientException), new ApiResponse { Result = false, Message = new InvalidClientException().Message } },
        { typeof(UserNotFoundException), new ApiResponse { Result = false, Message = new UserNotFoundException().Message } }
    };

    private readonly RequestDelegate _next;


    public SessionHandlerMiddleware(RequestDelegate next) { _next = next; }


    public async Task InvokeAsync(HttpContext context
        // IAuthenticationService authenticationService
        )
    {
        var currentSession = context.Request.Cookies
            .FirstOrDefault(cookie => cookie.Key.Equals(_sessionKey, StringComparison.OrdinalIgnoreCase)).Value;
        var currentRefreshToken = context.Request.Cookies
            .FirstOrDefault(cookie => cookie.Key.Equals(_refreshTokenKey, StringComparison.OrdinalIgnoreCase)).Value;

        // TODO: validate session with authenticationService

        await _next(context);
    }
}