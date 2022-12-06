using Xunit.Abstractions;
using Microsoft.Extensions.Configuration;
using MediFind.Backend.Features.Drug;
using Moq;
using MediatR;
using MediFind.Backend;
using Microsoft.AspNetCore.Http;

namespace CreateDrugTests;

public class CreateDrugTestClass
{   
    private ITestOutputHelper output;
    private Dictionary<string,string> myconfig;
    private Mock<IMediator> mock_mediator;
    private IConfigurationRoot config;
    private DbContext curr_context;
    private RepositoryManager repo_manager;
    
    public CreateDrugTestClass(ITestOutputHelper output){
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
    public void createDrugTest_adminFail(String authheader){
        var newController = new MediFind.Backend.Features.Drug.DrugController(this.mock_mediator.Object,this.repo_manager);
        
        newController.ControllerContext = new Microsoft.AspNetCore.Mvc.ControllerContext();
        newController.ControllerContext.HttpContext = new DefaultHttpContext();
        newController.ControllerContext.HttpContext.Request.Headers["Authorization"] = authheader;

        var cmnd = new CreateDrug.CreateDrugCommand();
        cmnd.DrugName = "newDrug1";
        cmnd.Manufacturer = "newMan1";
        cmnd.Purpose = "testing";
        cmnd.Usage = "do not use";
        cmnd.Dosage = "only during test";
        cmnd.SideEffects = "unknown";
        cmnd.Storage = "on github";
        cmnd.AvoidReasons = "if not test env";
        cmnd.Details = "lorem ipsum";
        cmnd.Ingredients = "lorem";

        Task<CreateDrug.CreateDrugResponse> response;
        Assert.ThrowsAsync<BadHttpRequestException>(()=>response = newController.CreateDrug(cmnd));
    }

    [Theory]
    [InlineData("h82")]
    [InlineData(null)]
    public void createDrugTest_authFail(String authheader){
        var newController = new MediFind.Backend.Features.Drug.DrugController(this.mock_mediator.Object,this.repo_manager);
        
        newController.ControllerContext = new Microsoft.AspNetCore.Mvc.ControllerContext();
        newController.ControllerContext.HttpContext = new DefaultHttpContext();
        newController.ControllerContext.HttpContext.Request.Headers["Authorization"] = authheader;
        newController.ControllerContext.HttpContext.Items["UserId"] = null;

        var cmnd = new CreateDrug.CreateDrugCommand();
        cmnd.DrugName = "newDrug1";
        cmnd.Manufacturer = "newMan1";
        cmnd.Purpose = "testing";
        cmnd.Usage = "do not use";
        cmnd.Dosage = "only during test";
        cmnd.SideEffects = "unknown";
        cmnd.Storage = "on github";
        cmnd.AvoidReasons = "if not test env";
        cmnd.Details = "lorem ipsum";
        cmnd.Ingredients = "lorem";

        Task<CreateDrug.CreateDrugResponse> response;
        Assert.ThrowsAsync<BadHttpRequestException>(()=>response = newController.CreateDrug(cmnd));
    }

    /**********************************/
    //INSERT HERE CREATE DRUG SUCCESS//
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