using System.Data;
using Dapper;

namespace MediFind.Backend.Features.Drug;

public class DrugRepository
{
    private readonly DbContext _dbContext;

    public DrugRepository(DbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task CreateDrug(DrugModel drug)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        const string sql = @"INSERT INTO drug (drug_name, manufacturer, purpose, usage_, dosage, side_effects, storage_, avoid_reasons, details)
                             VALUES (@DrugName, @Manufacturer, @Purpose, @Usage, @Dosage, @SideEffects, @Storage, @AvoidReasons, @Details)";

        await connection.ExecuteAsync(sql, drug);
    }

    public async Task<DrugModel> GetDrugById(long drugId)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        const string sql = @"SELECT * FROM drug
                             WHERE drug_id = @drugId";

        return await connection.QuerySingleAsync<DrugModel>(sql, new { drugId });
    }
}

