using Wilcar.Api.DTOs;


namespace Wilcar.Api.Repositories.Abstractions;

public interface IUsersRepository
{
    Task<UserDto> GetUserById(long id);

    Task<UserDto> GetUserByEmail(string email);

    Task<List<UserDto>> GetUsers();

    Task<UserDto> AddUser(UserDto entity);

    Task UpdateUser(UserDto entity);

    Task DeleteUser(long id);
}