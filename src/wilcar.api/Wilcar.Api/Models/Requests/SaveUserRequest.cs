namespace Wilcar.Api.Models.Requests;

public class SaveUserRequest
{
    public string Name { get; set; }

    public string Surname { get; set; }

    public string Email { get; set; }

    public string Password { get; set; }
}