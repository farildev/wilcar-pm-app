using System.ComponentModel.DataAnnotations.Schema;


namespace Wilcar.Api.Data.Entities;

[Table("Session", Schema = WilcarDbContext.Schema)]
public class Session
{
    public string Id { get; set; }

    public long? UserId { get; set; }

    public string? ClientRealIp { get; set; }

    public string? ClientUserAgent { get; set; }

    public DateTime ExpiredAt { get; set; }
}