using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Wilcar.Api.Data.Entities;

[Table("User", Schema = WilcarDbContext.Schema)]
public class User
{
    [Key]
    public long Id { get; set; }

    public string Name { get; set; }

    public string Surname { get; set; }

    public string Email { get; set; }

    public string Password { get; set; }
}