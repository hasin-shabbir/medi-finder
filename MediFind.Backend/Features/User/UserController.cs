using MediatR;
using Microsoft.AspNetCore.Mvc;
using static MediFind.Backend.Features.User.SignInUser;
using static MediFind.Backend.Features.User.SignUpUser;
using static MediFind.Backend.Features.User.SignOutUser;

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

    [HttpPost("sign-in")]
    public async Task<SignInUserResponse> SignInUser(SignInUserCommand command)
    {
        return await _mediator.Send(command);
    }

    [HttpPost("sign-up")]
    public async Task<SignUpUserResponse> SignUpUser(SignUpUserCommand command)
    {
        return await _mediator.Send(command);
    }

    [HttpPost("sign-out")]
    public async Task<SignOutUserResponse> SignOutUser(SignOutUserCommand command)
    {
        return await _mediator.Send(command);
    }

}