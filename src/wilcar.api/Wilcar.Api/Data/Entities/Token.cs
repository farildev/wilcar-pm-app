using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;


namespace Wilcar.Api.Data.Entities;

[Table("Token", Schema = WilcarDbContext.Schema)]
public class Token
{
    [Key]
    public string Id { get; set; }

    public long UserId { get; set; }

    public DateTime ExpiredAt { get; set; }
}