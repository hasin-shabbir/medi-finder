using MediatR;

namespace MediFind.Backend.Features.Drug;

public class CreateDrug
{
    public class CreateDrugCommand : IRequest<CreateDrugResponse>
    {
        public string DrugName { get; set; } = null!;
        public string Manufacturer { get; set; } = null!;
        public string Purpose { get; set; } = null!;
        public string Usage { get; set; } = null!;
        public string Dosage { get; set; } = null!;
        public string SideEffects { get; set; } = null!;
        public string Storage { get; set; } = null!;
        public string AvoidReasons { get; set; } = null!;
        public string Details { get; set; } = null!;
        public string Ingredients { get; set; } = null!;
    }

    public class CreateDrugResponse { }

    public class Handler : IRequestHandler<CreateDrugCommand, CreateDrugResponse>
    {
        private readonly RepositoryManager _repositoryManager;

        public Handler(RepositoryManager repositoryManager)
        {
            _repositoryManager = repositoryManager;
        }

        public async Task<CreateDrugResponse> Handle(CreateDrugCommand command, CancellationToken cancellationToken)
        {
            DrugModel drug = new()
            {
                DrugName = command.DrugName,
                Manufacturer = command.Manufacturer,
                Purpose = command.Purpose,
                Usage = command.Usage,
                Dosage = command.Dosage,
                SideEffects = command.SideEffects,
                Storage = command.Storage,
                AvoidReasons = command.AvoidReasons,
                Details = command.Details,
                Ingredients = command.Ingredients,
            };

            await _repositoryManager.Drug.CreateDrug(drug);

            return new CreateDrugResponse();

        }
    }
}

