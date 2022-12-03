using MediFind.Backend.Features.Drug;
using MediFind.Backend.Features.User;

namespace MediFind.Backend;

public class RepositoryManager
{
    private readonly DbContext _dbContext;
    private UserRepository? _userRepository;
    private DrugRepository? _drugRepository;

    public RepositoryManager(DbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public UserRepository User
    {
        get
        {
            _userRepository ??= new UserRepository(_dbContext);
            return _userRepository;
        }
    }

    public DrugRepository Drug
    {
        get
        {
            _drugRepository ??= new DrugRepository(_dbContext);
            return _drugRepository;
        }
    }
}

