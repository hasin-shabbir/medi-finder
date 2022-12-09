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

        const string sql = @"INSERT INTO drug (drug_name, manufacturer, purpose, usage_, dosage, side_effects, storage_, avoid_reasons, details, ingredients)
                             VALUES (@DrugName, @Manufacturer, @Purpose, @Usage, @Dosage, @SideEffects, @Storage, @AvoidReasons, @Details, @Ingredients)";

        await connection.ExecuteAsync(sql, drug);
    }

    public async Task<DrugModel> GetDrugById(long drugId)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        const string sql = @"SELECT * FROM drug
                             WHERE drug_id = @drugId";

        return await connection.QuerySingleAsync<DrugModel>(sql, new { drugId });
    }

    public async Task<IEnumerable<DrugModel>> GetDrugsSummaryByName(string drugName)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        const string sql = @"SELECT drug_id, drug_name, manufacturer, purpose, ingredients FROM drug
                             WHERE drug_name ILIKE @pattern";

        return await connection.QueryAsync<DrugModel>(sql, new { pattern = "%" + drugName + "%" });
    }

    public async Task<IEnumerable<DrugModel>> GetDrugsSummaryByIngredients(string ingredients)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        const string sql = @"SELECT drug_id, drug_name, manufacturer, purpose, ingredients FROM drug
                             WHERE ingredients ILIKE @pattern";

        return await connection.QueryAsync<DrugModel>(sql, new { pattern = "%" + ingredients + "%" });
    }

    public async Task<IEnumerable<DrugModel>> GetDrugsSummaryByManufacturer(string manufacturer)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        const string sql = @"SELECT drug_id, drug_name, manufacturer, purpose, ingredients FROM drug
                             WHERE manufacturer ILIKE @pattern";

        return await connection.QueryAsync<DrugModel>(sql, new { pattern = "%" + manufacturer + "%" });
    }

    public async Task UpdateDrug(DrugModel drug)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        if (drug.DrugName != null)
            await connection.ExecuteAsync("UPDATE drug SET drug_name = @DrugName WHERE drug_id  = @DrugId", drug);

        if (drug.Manufacturer != null)
            await connection.ExecuteAsync("UPDATE drug SET manufacturer = @Manufacturer WHERE drug_id  = @DrugId", drug);

        if (drug.Purpose != null)
            await connection.ExecuteAsync("UPDATE drug SET purpose = @Purpose WHERE drug_id  = @DrugId", drug);

        if (drug.Usage != null)
            await connection.ExecuteAsync("UPDATE drug SET usage_ = @Usage WHERE drug_id  = @DrugId", drug);

        if (drug.Dosage != null)
            await connection.ExecuteAsync("UPDATE drug SET dosage = @Dosage WHERE drug_id  = @DrugId", drug);

        if (drug.Storage != null)
            await connection.ExecuteAsync("UPDATE drug SET storage_ = @Storage WHERE drug_id  = @DrugId", drug);

        if (drug.AvoidReasons != null)
            await connection.ExecuteAsync("UPDATE drug SET avoid_reasons = @AvoidReasons WHERE drug_id  = @DrugId", drug);

        if (drug.Details != null)
            await connection.ExecuteAsync("UPDATE drug SET details = @Details WHERE drug_id  = @DrugId", drug);

        if (drug.Ingredients != null)
            await connection.ExecuteAsync("UPDATE drug SET ingredients = @Ingredients WHERE drug_id  = @DrugId", drug);
    }

    public async Task DeleteDrug(long drugId)
    {
        using IDbConnection connection = _dbContext.GetConnection();

        const string sql = @"DELETE FROM drug
                             WHERE drug_id = @drugId";

        await connection.ExecuteAsync(sql, new { drugId });
    }
}

