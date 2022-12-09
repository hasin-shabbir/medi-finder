using MediatR;
using Microsoft.AspNetCore.Mvc;
using static MediFind.Backend.Features.User.SignInUser;
using static MediFind.Backend.Features.User.SignUpUser;
using static MediFind.Backend.Features.User.SignOutUser;
using MediFind.Backend.Features.Common.Attributes;
using static BCrypt.Net.BCrypt;
using MediFind.Backend.Features.Drug;

namespace MediFind.Backend.Features.User;

[Route("api/users")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IMediator _mediator;
    private readonly RepositoryManager _repositoryManager;

    public UserController(IMediator mediator, RepositoryManager repositoryManager)
    {
        _mediator = mediator;
        _repositoryManager = repositoryManager;
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

    [HttpPost("self/saved-drugs/{drugId}")]
    [Auth]
    public async Task SaveDrug([FromRoute] long drugId, [FromHeader] string Authorization)
    {
        long? userId = (long?)HttpContext.Items["UserId"];

        if (userId == null) throw new BadHttpRequestException("", StatusCodes.Status401Unauthorized);

        await _repositoryManager.User.SaveDrug((long)userId, drugId);
    }

    [HttpPut("self")]
    [Auth]
    public async Task ChangePassword([FromBody] string password, [FromHeader] string Authorization)
    {
        long? userId = (long?)HttpContext.Items["UserId"];

        if (userId == null) throw new BadHttpRequestException("", StatusCodes.Status401Unauthorized);

        await _repositoryManager.User.UpdatePasswordHash((long)userId, HashPassword(password));
    }

    [HttpGet("self/saved-drugs")]
    [Auth]
    public async Task<IEnumerable<DrugModel>> GetSavedDrugs([FromHeader] string Authorization)
    {
        long? userId = (long?)HttpContext.Items["UserId"];

        if (userId == null) throw new BadHttpRequestException("", StatusCodes.Status401Unauthorized);

        return await _repositoryManager.User.GetSavedDrugs((long)userId);
    }
}