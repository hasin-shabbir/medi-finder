using Xunit;
using Xunit.Abstractions;
using System;
using Microsoft.Extensions.Configuration;
using MediFind.Backend.Features.Drug;
using Moq;
using MediatR;
using MediFind.Backend;
using Dapper;
// using static MediFind.Backend.RepositoryManager;

using static MediFind.Backend.Features.Drug.DrugController;

namespace UserTests;


public class UnitTest1
{   
    private ITestOutputHelper output;

    public UnitTest1(ITestOutputHelper output){
        this.output = output;
        Dapper.DefaultTypeMap.MatchNamesWithUnderscores = true;
    }

    [Fact]
    public void drugByIdTest()
    {
        var myconfig = new Dictionary<string, string> {
            {"ConnectionStrings:Database","Host=medifind-db.cwi0wezznrhn.me-central-1.rds.amazonaws.com:5432;Username=postgres;Password=Medifind123;Database=postgres"}
        };
        var config = new ConfigurationBuilder().AddInMemoryCollection(myconfig).Build();
        var curr_context = new DbContext(config);
        var mock_mediator = new Mock<IMediator>();
        var repo_manager = new RepositoryManager(curr_context);
        
        var newController = new MediFind.Backend.Features.Drug.DrugController(mock_mediator.Object,repo_manager);
        var response = newController.GetDrugById(5);
        response.Wait();
    
        Assert.Equal(5,response.Result.DrugId);
    }
}