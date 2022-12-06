using Xunit.Abstractions;
using Microsoft.Extensions.Configuration;
using MediFind.Backend.Features.User;
using Moq;
using MediatR;
using MediFind.Backend;
using Microsoft.AspNetCore.Http;

namespace SignOutTests;

public class UnitTest5
{   
    private ITestOutputHelper output;
    private Dictionary<string,string> myconfig;
    private Mock<IMediator> mock_mediator;
    private IConfigurationRoot config;
    private DbContext curr_context;
    private RepositoryManager repo_manager;
    
    public UnitTest5(ITestOutputHelper output){
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
    [InlineData(9)]
    public async void SaveAndGetSavedDrugTest(int drugid) {    
        await repo_manager.User.SaveDrug((long)2,drugid);

        var response = await repo_manager.User.GetSavedDrugs(2);
        var res_list = response.ToList();
        bool passing = false;
        foreach (var res in res_list){
            if (res.DrugId == drugid){
                passing = true;
                break;
            }
        }

        Assert.True(passing);
    }

}