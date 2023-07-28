namespace Wilcar.Api.Utils.Abstractions;

public interface IHashHelper
{
    string ToSHA256(string rawData);
}