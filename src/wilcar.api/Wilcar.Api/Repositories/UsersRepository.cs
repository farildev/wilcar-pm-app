using Mapster;

using Ardalis.GuardClauses;

using Microsoft.EntityFrameworkCore;

using Wilcar.Api.Data.Entities;
using Wilcar.Api.DTOs;
using Wilcar.Api.Exceptions.User;
using Wilcar.Api.Mappers;
using Wilcar.Api.Repositories.Abstractions;


namespace Wilcar.Api.Repositories;

public class UsersRepository : IUsersRepository
{
    private readonly ILogger<UsersRepository> _logger;
    private readonly Data.WilcarDbContext _dbContext;
    private readonly MapperConfig<User, User> _usersConfig;


    public UsersRepository(
        ILogger<UsersRepository> logger,
        Data.WilcarDbContext dbContext,
        MapperConfig<User, User> usersConfig
    )
    {
        _dbContext = Guard.Against.Null(dbContext);
        _logger = Guard.Against.Null(logger);
        _logger.LogInformation("Users repository created.");
        _usersConfig = Guard.Against.Null(usersConfig);
    }


    public async Task<UserDto> GetUserById(long id)
    {
        return (await _dbContext.Users.FirstOrDefaultAsync(u => u.Id == id))
            .Adapt<UserDto>() ?? throw new UserNotFoundException();
    }

    public async Task<UserDto> GetUserByEmail(string email)
    {
        return (await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == email))
            .Adapt<UserDto>() ?? throw new UserNotFoundException();
    }

    public async Task<List<UserDto>> GetUsers()
    {
        var result = _dbContext.Users.Where(u => true).Adapt<UserDto>();

        return result.Adapt<List<UserDto>>();
    }

    public async Task<UserDto> AddUser(UserDto request)
    {
        var user = request.Adapt<User>();
        await _dbContext.Users.AddAsync(user);
        await this.saveUser();

        return user.Adapt<UserDto>();
    }

    public async Task UpdateUser(UserDto request)
    {
        await this.GetUserById(request.Id);

        var existingUser = _dbContext.Set<User>().Local.FirstOrDefault(e => e.Id == request.Id);
        if (existingUser != null)
            _dbContext.Users.Entry(existingUser).State = EntityState.Detached;

        var updatedUser = request.Adapt<User>(_usersConfig.Config);
        _dbContext.Users.Entry(updatedUser).State = EntityState.Modified;

        await this.saveUser();
    }

    public async Task DeleteUser(long id)
    {
        if (id == 1)
            throw new DefaultUserDeletionException();

        var user = await this.GetUserById(id);

        var existingUser = _dbContext.Set<User>().Local.FirstOrDefault(e => e.Id == id);
        if (existingUser != null)
            _dbContext.Users.Entry(existingUser).State = EntityState.Detached;


        _dbContext.Users.Remove(user.Adapt<User>());

        await this.saveUser();
    }

    private async Task saveUser()
    {
        await _dbContext.SaveChangesAsync();
    }
}