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

    [HttpGet]
    public async Task<IEnumerable<DrugModel>> SearchDrugs([FromQuery] string? name, [FromQuery] string? ingredients, [FromQuery] string? manufacturer)
    {
        if (!string.IsNullOrEmpty(name))
            return await _repositoryManager.Drug.GetDrugsSummaryByName(name);

        if (!string.IsNullOrEmpty(ingredients))
            return await _repositoryManager.Drug.GetDrugsSummaryByIngredients(ingredients);

        if (!string.IsNullOrEmpty(manufacturer))
            return await _repositoryManager.Drug.GetDrugsSummaryByIngredients(manufacturer);

        return Enumerable.Empty<DrugModel>();
    }

    [HttpPut("{drugId}")]
    [Auth]
    public async Task UpdateDrug([FromRoute] long drugId, DrugModel drug)
    {
        long? userId = (long?)HttpContext.Items["UserId"];

        if (userId == null) throw new BadHttpRequestException("", StatusCodes.Status401Unauthorized);

        if (!(await _repositoryManager.User.GetUserById((long)userId)).IsAdmin)
            throw new BadHttpRequestException("", StatusCodes.Status401Unauthorized);

        drug.DrugId = drugId;

        await _repositoryManager.Drug.UpdateDrug(drug);
    }

    [HttpDelete("{drugId}")]
    [Auth]
    public async Task DeleteDrug([FromRoute] long drugId)
    {
        long? userId = (long?)HttpContext.Items["UserId"];

        if (userId == null)
            throw new BadHttpRequestException("", StatusCodes.Status401Unauthorized);

        if (!(await _repositoryManager.User.GetUserById((long)userId)).IsAdmin)
            throw new BadHttpRequestException("", StatusCodes.Status401Unauthorized);

        await _repositoryManager.Drug.DeleteDrug(drugId);
    }
}

