using MediatR;

namespace MediFind.Backend.Features.User;

public class SignOutUser
{
    public class SignOutUserCommand : IRequest<SignOutUserResponse>
    {
        public string SessionId { get; set; } = null!;
    }

    public class SignOutUserResponse { }

    public class Handler : IRequestHandler<SignOutUserCommand, SignOutUserResponse>
    {
        private readonly RepositoryManager _repositoryManager;

        public Handler(RepositoryManager repositoryManager)
        {
            _repositoryManager = repositoryManager;
        }

        public async Task<SignOutUserResponse> Handle(SignOutUserCommand command, CancellationToken cancellationToken)
        {
            await _repositoryManager.User.DeleteSession(command.SessionId);

            return new SignOutUserResponse();
        }
    }
}

