using Wilcar.Api.DTOs;
using Wilcar.Api.Models.Requests;


namespace Wilcar.Api.Services.Abstractions;

public interface IUsersService
{
    Task<UserDto> GetUserById(long id);

    Task<List<UserDto>> GetUsers();

    Task<UserDto> SaveUser(SaveUserRequest request);

    Task UpdateUser(UserDto request);

    Task DeleteUser(long id);
}