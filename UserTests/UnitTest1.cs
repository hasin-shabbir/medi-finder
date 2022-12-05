using Xunit;
using Xunit.Abstractions;
using System;
using Microsoft.Extensions.Configuration;
using MediFind.Backend.Features.Drug;
using Moq;
using MediatR;
using MediFind.Backend;
using Dapper;
using Microsoft.AspNetCore.Http;
// using static MediFind.Backend.RepositoryManager;

using static MediFind.Backend.Features.Drug.DrugController;

namespace UserTests;


public class UnitTest1
{   
    private ITestOutputHelper output;
    private Dictionary<string,string> myconfig;
    private Mock<IMediator> mock_mediator;
    
    public UnitTest1(ITestOutputHelper output){
        this.output = output;
        this.myconfig = new Dictionary<string, string> {
            {"ConnectionStrings:Database","Host=medifind-db.cwi0wezznrhn.me-central-1.rds.amazonaws.com:5432;Username=postgres;Password=Medifind123;Database=postgres"}
        };
        Dapper.DefaultTypeMap.MatchNamesWithUnderscores = true;
        this.mock_mediator = new Mock<IMediator>();

    }

    //search by QR code test
    [Fact]
    public void SearchDrugByIdTest()
    {
        var config = new ConfigurationBuilder().AddInMemoryCollection(this.myconfig).Build();
        var curr_context = new DbContext(config);
        var repo_manager = new RepositoryManager(curr_context);
        
        var newController = new MediFind.Backend.Features.Drug.DrugController(mock_mediator.Object,repo_manager);
        var response = newController.GetDrugById(5);
        response.Wait();
    
        Assert.Equal(5,response.Result.DrugId);
    }

    //search by name, ingredient, and/or manufacturer
    [Theory]
    [InlineData("drug1",null,null)]
    [InlineData(null,"paracetamol",null)]
    [InlineData(null,null,"manufacturer1")]
    public void SearchDrugTest(string? name,string? ingredients, string? manufacturer){

        var config = new ConfigurationBuilder().AddInMemoryCollection(this.myconfig).Build();
        var curr_context = new DbContext(config);
        var repo_manager = new RepositoryManager(curr_context);
        
        var newController = new MediFind.Backend.Features.Drug.DrugController(mock_mediator.Object,repo_manager);
        var response = newController.SearchDrugs(name,ingredients,manufacturer);
        response.Wait();
        
        bool name_pass = true;
        bool ing_pass = true;
        bool manufacturer_pass = true;
        var res_list = response.Result.ToList();

        if (name!=null){
            foreach (var res in res_list){
                if (res.DrugName==null || !(res.DrugName.Contains(name))){
                    name_pass = false;
                    break;
                }
            }
        }

        if (name_pass && ingredients!=null){
            foreach (var res in res_list){
                if (res.Ingredients==null || !(res.Ingredients.Contains(ingredients))){
                    ing_pass = false;
                    break;
                }
            }
        }

        if (name_pass && ing_pass && manufacturer!=null){
            foreach (var res in res_list){
                if (res.Manufacturer==null || !(res.Manufacturer.Contains(manufacturer))){
                    manufacturer_pass = false;
                    break;
                }
            }
        }

        Assert.True(name_pass);
        Assert.True(ing_pass);
        Assert.True(manufacturer_pass);
    }

}