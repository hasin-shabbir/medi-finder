using Npgsql;
using System.Data;

namespace MediFind.Backend;

public class DbContext
{
    private readonly IConfiguration _config;

    public DbContext(IConfiguration config)
    {
        _config = config;
    }

    public IDbConnection GetConnection()
    {
        return new NpgsqlConnection(_config.GetConnectionString("Database"));
    }
}
