namespace MediFind.Backend.Features.User;

public class UserModel
{
    public long UserId { get; set; }
    public string Email { get; set; } = null!;
    public string PasswordHash { get; set; } = null!;
    public string FullName { get; set; } = null!;
    public bool IsAdmin { get; set; }
    public DateTime CreatedOn { get; set; }
}