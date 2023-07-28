using System.Text.Json.Serialization;


namespace Wilcar.Api.Options;

public class CookieConfig
{
    public bool Secure { get; set; }

    public bool HttpOnly { get; set; }

    public bool IsEssential { get; set; }

    public string Path { get; set; }

    public string Domain { get; set; }

    [JsonConverter(typeof(JsonStringEnumConverter))]
    public SameSiteMode SameSite { get; set; }
}