using MediatR;
using MediFind.Backend.Features.Common.Attributes;
using Microsoft.AspNetCore.Mvc;
using static MediFind.Backend.Features.Drug.CreateDrug;

namespace MediFind.Backend.Features.Drug;

[Route("api/drugs")]
[ApiController]
public class DrugController : ControllerBase
{
    private readonly IMediator _mediator;
    private readonly RepositoryManager _repositoryManager;

    public DrugController(IMediator mediator, RepositoryManager repositoryManager)
    {
        _mediator = mediator;
        _repositoryManager = repositoryManager;
    }

    [HttpPost]
    [Auth]
    public async Task<CreateDrugResponse> CreateDrug(CreateDrugCommand command)
    {
        long? userId = (long?)HttpContext.Items["UserId"];

        if (userId == null) throw new BadHttpRequestException("", StatusCodes.Status401Unauthorized);

        if (!(await _repositoryManager.User.GetUserById((long)userId)).IsAdmin)
            throw new BadHttpRequestException("", StatusCodes.Status401Unauthorized);

        return await _mediator.Send(command);
    }

    [HttpGet("{drugId}")]
    public async Task<DrugModel> GetDrugById([FromRoute] long drugId)
    {
        return await _repositoryManager.Drug.GetDrugById(drugId);
    }
}

