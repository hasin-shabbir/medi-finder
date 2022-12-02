using MediFind.Backend.Features.User;

namespace MediFind.Backend;

public class RepositoryManager
{
    private readonly DbContext _dbContext;
    private UserRepository? _userRepository;

    public RepositoryManager(DbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public UserRepository User
    {
        get
        {
            if (_userRepository == null)
                _userRepository = new UserRepository(_dbContext);
            return _userRepository;
        }
    }

}

