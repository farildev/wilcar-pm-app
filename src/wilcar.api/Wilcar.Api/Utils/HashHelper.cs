using System.Text;
using System.Security.Cryptography;

using Wilcar.Api.Utils.Abstractions;


namespace Wilcar.Api.Utils;

public class HashHelper : IHashHelper
{
    public string ToSHA256(string rawData)
    {
        var bytes = SHA256.HashData(Encoding.UTF8.GetBytes(rawData));

        var builder = new StringBuilder();

        for (int i = 0; i < bytes.Length; i++)
            builder.Append(bytes[i].ToString("x2"));

        return builder.ToString();
    }
}