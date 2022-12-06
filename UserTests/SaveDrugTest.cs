using Xunit.Abstractions;
using Microsoft.Extensions.Configuration;
using MediFind.Backend.Features.User;
using Moq;
using MediatR;
using MediFind.Backend;
using Microsoft.AspNetCore.Http;

namespace SaveDrugTests;

public class SaveDrugTestClass
{   
    private ITestOutputHelper output;
    private Dictionary<string,string> myconfig;
    private Mock<IMediator> mock_mediator;
    private IConfigurationRoot config;
    private DbContext curr_context;
    private RepositoryManager repo_manager;
    
    public SaveDrugTestClass(ITestOutputHelper output){
        this.output = output;
        this.myconfig = new Dictionary<string, string> {
            {"ConnectionStrings:Database","Host=medifind-db.cwi0wezznrhn.me-central-1.rds.amazonaws.com:5432;Username=postgres;Password=Medifind123;Database=postgres"}
        };
        Dapper.DefaultTypeMap.MatchNamesWithUnderscores = true;
        this.mock_mediator = new Mock<IMediator>();
        this.config = new ConfigurationBuilder().AddInMemoryCollection(this.myconfig).Build();
        this.curr_context = new DbContext(this.config);
        this.repo_manager = new RepositoryManager(this.curr_context);

    }

    [Theory]
    [InlineData((long)4, 9)]
    public async void SaveAndGetSavedDrugTest(long userId, int drugid) {    
        await repo_manager.User.SaveDrug(userId,drugid);

        var response = await repo_manager.User.GetSavedDrugs(userId);
        var res_list = response.ToList();
        bool passing = false;
        foreach (var res in res_list){
            if (res.DrugId == drugid){
                passing = true;
                break;
            }
        }

        // await repo_manager.User.
        // await repo_manager.User.
        // await repo_manager.Drug.DeleteDrug(drugid); 

        Assert.True(passing);
    }

}