using FluentValidation.Results;


namespace Wilcar.Api.Exceptions;

public class ValidationFailedException : BaseException
{
    public ValidationFailedException(IEnumerable<ValidationFailure> validationFailures, string overallErrorMessage)
            : base(validationFailures.Count() > 1 ? overallErrorMessage : validationFailures.First().ErrorMessage)
    {
    }


    public sealed override string Message => this.Message;
}