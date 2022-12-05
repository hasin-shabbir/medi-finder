using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography;
using MediatR;
using static BCrypt.Net.BCrypt;

namespace MediFind.Backend.Features.User;

public class SignUpUser
{
    public class SignUpUserCommand : IRequest<SignUpUserResponse>
    {
        [EmailAddress]
        public string Email { get; set; } = null!;
        [RegularExpression("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]
        public string Password { get; set; } = null!;
        public string FullName { get; set; } = null!;
    }

    public class SignUpUserResponse
    {
        public long UserId { get; set; }
        public string Email { get; set; } = null!;
        public string FullName { get; set; } = null!;
        public bool IsAdmin { get; set; }
        public DateTime CreatedOn { get; set; }
        public string SessionId { get; set; } = null!;
    }

    public class Handler : IRequestHandler<SignUpUserCommand, SignUpUserResponse>
    {
        private readonly RepositoryManager _repositoryManager;
        private readonly int _sessionIdBytes;
        private readonly int _sessionIdBase64Length;

        public Handler(RepositoryManager repositoryManager)
        {
            _repositoryManager = repositoryManager;
            _sessionIdBytes = 16;
            _sessionIdBase64Length = (int)Math.Ceiling(_sessionIdBytes * 8 / 6f);
        }

        public async Task<SignUpUserResponse> Handle(SignUpUserCommand command, CancellationToken cancellationToken)
        {
            UserModel user = await _repositoryManager.User.GetUserByEmail(command.Email);

            if (user != null) throw new BadHttpRequestException("Email is alredy registred", 400);

            string sessionId = Convert.ToBase64String(RandomNumberGenerator.GetBytes(_sessionIdBytes))[.._sessionIdBase64Length];
            string passwordHash = HashPassword(command.Password);

            user = new()
            {
                UserId = 0,
                Email = command.Email,
                PasswordHash = passwordHash,
                FullName = command.FullName,
                IsAdmin = false,
                CreatedOn = DateTime.UtcNow,
            };

            long userId = await _repositoryManager.User.CreateUser(user);

            await _repositoryManager.User.CreateSession(sessionId, userId);

            SignUpUserResponse response = new()
            {
                UserId = user.UserId,
                Email = user.Email,
                FullName = user.FullName,
                IsAdmin = user.IsAdmin,
                CreatedOn = user.CreatedOn,
                SessionId = sessionId,
            };

            return response;

        }
    }
}

