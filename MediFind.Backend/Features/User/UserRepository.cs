using System.Data;
using Dapper;
using MediFind.Backend.Features.Drug;

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
                             WHERE session_id = @sessionId";

        return await connection.ExecuteScalarAsync<long>(sql, new { sessionId });
    }

    public async Task DeleteSession(string sessionId)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        const string sql = @"DELETE FROM session_
                             WHERE session_id = @sessionId";

        await connection.ExecuteAsync(sql, new { sessionId });
    }

    public async Task SaveDrug(long userId, long drugId)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        const string sql = @"INSERT INTO user_saved_drug (user_id, drug_id)
                             VALUES (@userId, @drugId)";

        await connection.ExecuteAsync(sql, new { userId, drugId });
    }

    public async Task UpdatePasswordHash(long userId, string passwordHash)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        const string sql = @"UPDATE user_
                             SET password_hash = @passwordHash
                             WHERE user_id = @userId";

        await connection.ExecuteAsync(sql, new { userId, passwordHash });
    }

    public async Task<IEnumerable<DrugModel>> GetSavedDrugs(long userId)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        const string sql = @"SELECT drug.drug_id, drug.drug_name, drug.manufacturer
                             FROM drug
                             INNER JOIN user_saved_drug
                             ON user_saved_drug.drug_id = drug.drug_id
                             WHERE user_saved_drug.user_id = @userId";

        return await connection.QueryAsync<DrugModel>(sql, new { userId });
    }
}
