using Xunit.Abstractions;
using Microsoft.Extensions.Configuration;
using MediFind.Backend.Features.Drug;
using Moq;
using MediatR;
using MediFind.Backend;
using Microsoft.AspNetCore.Http;

namespace UpdateDrugTests;

public class UpdateDrugTestClass
{   
    private ITestOutputHelper output;
    private Dictionary<string,string> myconfig;
    private Mock<IMediator> mock_mediator;
    private IConfigurationRoot config;
    private DbContext curr_context;
    private RepositoryManager repo_manager;
    
    public UpdateDrugTestClass(ITestOutputHelper output){
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
    [InlineData("h0FsK78HXYCMTUSOKMDB1g")]
    [InlineData("q3p+BwCNBq0kVgZLU+oMZw")]
    [InlineData("ZGV0078ibQmYU5XWQWlpsg")]
    public void updateDrugTest_adminFail(String authheader){
        var newController = new MediFind.Backend.Features.Drug.DrugController(this.mock_mediator.Object,this.repo_manager);
        
        newController.ControllerContext = new Microsoft.AspNetCore.Mvc.ControllerContext();
        newController.ControllerContext.HttpContext = new DefaultHttpContext();
        newController.ControllerContext.HttpContext.Request.Headers["Authorization"] = authheader;

        var drug = new DrugModel();
        drug.DrugName = "updatedDrug1";
        drug.Manufacturer = "updatedMan1";
        drug.Purpose = "testing";
        drug.Usage = "do not use";
        drug.Dosage = "only during test";
        drug.SideEffects = "unknown";
        drug.Storage = "on github";
        drug.AvoidReasons = "if not test env";
        drug.Details = "lorem ipsum";
        drug.Ingredients = "lorem";

        Task response;
        Assert.ThrowsAsync<BadHttpRequestException>(()=>response = newController.UpdateDrug((long)2, drug,""));
    }

    [Theory]
    [InlineData("8ehrfg7")]
    [InlineData(null)]
    public void updateDrugTest_authFail(String authheader){
        var newController = new MediFind.Backend.Features.Drug.DrugController(this.mock_mediator.Object,this.repo_manager);
        
        newController.ControllerContext = new Microsoft.AspNetCore.Mvc.ControllerContext();
        newController.ControllerContext.HttpContext = new DefaultHttpContext();
        newController.ControllerContext.HttpContext.Request.Headers["Authorization"] = authheader;
        newController.ControllerContext.HttpContext.Items["UserId"] = null;

        var drug = new DrugModel();
        drug.DrugName = "updatedDrug1";
        drug.Manufacturer = "updatedMan1";
        drug.Purpose = "testing";
        drug.Usage = "do not use";
        drug.Dosage = "only during test";
        drug.SideEffects = "unknown";
        drug.Storage = "on github";
        drug.AvoidReasons = "if not test env";
        drug.Details = "lorem ipsum";
        drug.Ingredients = "lorem";

        Task response;
        Assert.ThrowsAsync<BadHttpRequestException>(()=>response = newController.UpdateDrug((long)2, drug,""));
    }

    /**********************************/
    //INSERT HERE UPDATE DRUG SUCCESS//
    /********************************/

    //TODO:
    //1. case-sensitivity check
    //2. createDrug test success
    //3. mini-tests
    //4. validation, integration, unit tests
    //5. github integrations and build tests
    //6. all tests from presentation
    //7. presentation and documentation
    //8. print reason for test fail
    //9. Auth test

}