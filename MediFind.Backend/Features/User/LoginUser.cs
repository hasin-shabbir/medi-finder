using System.Security.Cryptography;
using MediatR;
using static BCrypt.Net.BCrypt;

namespace MediFind.Backend.Features.User;

public class LoginUser
{
    public class LoginUserCommand : IRequest<LoginUserResponse>
    {
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
    }

    public class LoginUserResponse
    {
        public long UserId { get; set; }
        public string Email { get; set; } = null!;
        public string FullName { get; set; } = null!;
        public bool IsAdmin { get; set; }
        public DateTime CreatedOn { get; set; }
        public string SessionId { get; set; } = null!;
    }

    public class Handler : IRequestHandler<LoginUserCommand, LoginUserResponse>
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

        public async Task<LoginUserResponse> Handle(LoginUserCommand command, CancellationToken cancellationToken)
        {
            UserModel user = await _repositoryManager.User.GetUserByEmail(command.Email);

            if (user == null) throw new BadHttpRequestException("Username does not exist", 400);

            if (!Verify(command.Password, user.PasswordHash)) throw new BadHttpRequestException("Password is incorrect", 400);

            string sessionId = Convert.ToBase64String(RandomNumberGenerator.GetBytes(_sessionIdBytes))[.._sessionIdBase64Length];
            await _repositoryManager.User.CreateSession(sessionId, user.UserId);

            LoginUserResponse response = new()
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

