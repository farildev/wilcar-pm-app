using Ardalis.GuardClauses;

using FluentValidation;

using Mapster;

using Wilcar.Api.DTOs;
using Wilcar.Api.Exceptions;
using Wilcar.Api.Models.Requests;
using Wilcar.Api.Services.Abstractions;
using Wilcar.Api.Repositories.Abstractions;


namespace Wilcar.Api.Services;

public class UsersService : IUsersService
{
    private readonly ILogger<UsersService> _logger;
    private readonly IUsersRepository _usersRepository;
    private readonly IValidator<SaveUserRequest> _validator;


    public UsersService(
        ILogger<UsersService> logger,
        IUsersRepository usersRepository,
        IValidator<SaveUserRequest> validator
    )
    {
        _logger = Guard.Against.Null(logger);
        _logger.LogInformation("Users service created.");
        _usersRepository = Guard.Against.Null(usersRepository);
        _validator = Guard.Against.Null(validator);
    }


    public async Task<UserDto> GetUserById(long id)
    {
        return await _usersRepository.GetUserById(id);
    }

    public async Task<List<UserDto>> GetUsers()
    {
        return await _usersRepository.GetUsers();
    }

    public async Task<UserDto> SaveUser(SaveUserRequest request)
    {
        var validationResult = await _validator.ValidateAsync(request);

        if (!validationResult.IsValid)
        {
            string errorMessage = validationResult.Errors.Count > 1 ? "Invalid user details provided" : validationResult.Errors.First().ErrorMessage;
            throw new ValidationFailedException(validationResult.Errors, errorMessage);
        }

        return await _usersRepository.AddUser(request.Adapt<UserDto>());
    }

    public async Task UpdateUser(UserDto request)
    {
        await _usersRepository.UpdateUser(request);
    }

    public async Task DeleteUser(long id)
    {
        await _usersRepository.DeleteUser(id);
    }
}