using System.Data;
using Dapper;

namespace MediFind.Backend.Features.User;

public class UserRepository
{
    private readonly DbContext _dbContext;

    public UserRepository(DbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<long> CreateUser(UserModel user)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        const string sql = @"INSERT INTO user_ (email, password_hash, full_name, is_admin)
                             VALUES (@Email, @PasswordHash, @FullName, @IsAdmin)
                             RETURNING user_id";

        return await connection.ExecuteScalarAsync<long>(sql, user);
    }

    public async Task CreateSession(string sessionId, long userId)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        const string sql = @"INSERT INTO session_ (session_id, user_id)
                             VALUES (@sessionId, @userId)";

        await connection.ExecuteAsync(sql, new { sessionId, userId });
    }

    public async Task<UserModel> GetUserById(long userId)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        const string sql = @"SELECT * FROM user_
                             WHERE user_id = @userId";

        return await connection.QuerySingleOrDefaultAsync<UserModel>(sql, new { userId });
    }

    public async Task<UserModel> GetUserBySessionId(string sessionId)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        const string sql = @"SELECT user_.*
                             FROM user_
                             INNER JOIN session_
                             ON user_.user_id = session_.user_id
                             WHERE session_.session_id = @sessionId";

        return await connection.QuerySingleOrDefaultAsync<UserModel>(sql, new { sessionId });
    }

    public async Task<UserModel> GetUserByEmail(string email)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        const string sql = @"SELECT *
                             FROM user_
                             WHERE email = @email";

        return await connection.QuerySingleOrDefaultAsync<UserModel>(sql, new { email });
    }

    public async Task<long> GetUserIdBySessionId(string sessionId)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        const string sql = @"SELECT user_id
                             FROM session_
                             WHERE user_id = @userId";

        return await connection.ExecuteScalarAsync<long>(sql, new { sessionId });
    }

    public async Task DeleteSession(string sessionId)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        const string sql = @"DELETE FROM session_
                             WHERE session_id = @sessionId";

        await connection.ExecuteAsync(sql, new { sessionId });
    }
}
