using System.Net.Mime;

using Ardalis.GuardClauses;

using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;

using Wilcar.Api.Constants;
using Wilcar.Api.Models.Requests;
using Wilcar.Api.Models.Responses;


namespace Wilcar.Api.Controllers;

[Route("api/[controller]/")]
[Produces(MediaTypeNames.Application.Json)]
[Consumes(MediaTypeNames.Application.Json)]
public class AuthController : ControllerBase
{
    private readonly IAuthenticationService _authenticationService;
    private readonly CookieOptions _cookieOptions;


    public AuthController(
        IAuthenticationService authenticationService,
        CookieOptions cookieOptions
    )
    {
        _authenticationService = Guard.Against.Null(authenticationService);
        _cookieOptions = Guard.Against.Null(cookieOptions);
    }


    [HttpPost("sign-in")]
    [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status200OK)]
    public async Task<ApiResponse> SignIn([FromBody] SignInRequest request)
    {

        // TODO: implement logic

        return new ApiResponse()
        {
            Result = true
        };
    }

    [HttpPost]
    [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status200OK)]
    public async Task<ApiResponse> ValidateSession()
    {

        // TODO: implement logic

        return new ApiResponse
        {
            Result = true,
            Payload = null
        };
    }

    [HttpPost("refresh")]
    [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status200OK)]
    public async Task<ApiResponse> RefreshToken()
    {

        // TODO: implement logic

        return new ApiResponse()
        {
            Result = true
        };
    }

    [HttpPost("sign-out")]
    [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status200OK)]
    public async Task<ApiResponse> SignOut()
    {
        // TODO: implement logic

        this.HttpContext.Response.Cookies.Delete(Cookies.SESSION_KEY);
        this.HttpContext.Response.Cookies.Delete(Cookies.REFRESHTOKEN_KEY);

        return new ApiResponse()
        {
            Result = true
        };
    }
}