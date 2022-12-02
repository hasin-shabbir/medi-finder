using MediatR;
using Microsoft.AspNetCore.Mvc;
using static MediFind.Backend.Features.User.LoginUser;

namespace MediFind.Backend.Features.User;

[Route("api/users")]
[ApiController]
public class UserController
{
    private readonly IMediator _mediator;

    public UserController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost("login")]
    public async Task<LoginUserResponse> LoginUser(LoginUserCommand command)
    {
        return await _mediator.Send(command);
    }


}