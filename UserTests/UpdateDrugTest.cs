using Xunit.Abstractions;
using Microsoft.Extensions.Configuration;
using MediFind.Backend.Features.Drug;
using Moq;
using MediatR;
using MediFind.Backend;
using Microsoft.AspNetCore.Http;

namespace UpdateDrugTests;

//driver to test update drug functionality
public class UpdateDrugTestClass
{   
    private ITestOutputHelper output; //output helper to log debugging output
    private Dictionary<string,string> myconfig; //config dictionary for the current context
    private Mock<IMediator> mock_mediator; //mock mediator for current context
    private IConfigurationRoot config; //configuration settings for current db context
    private DbContext curr_context; //current db context
    private RepositoryManager repo_manager; //repository manager for the current context
    
    //constructor to initialize all private variables
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

    //valid admin auth token
    [Theory]
    [InlineData("n+7AYXWDPsa3oqev38cvuw")]
    //admin logged in to update drug
    public async void updateDrugTest_success(String authheader){
        //controller to invoke endpoint
        var newController = new MediFind.Backend.Features.Drug.DrugController(this.mock_mediator.Object,this.repo_manager);
        //set auth header in the current http context
        newController.ControllerContext = new Microsoft.AspNetCore.Mvc.ControllerContext();
        newController.ControllerContext.HttpContext = new DefaultHttpContext();
        newController.ControllerContext.HttpContext.Request.Headers["Authorization"] = authheader;
        newController.ControllerContext.HttpContext.Items["UserId"] = (long)8; //admin user id

        //create a drug to be stored in db
        var cmnd = new DrugModel();
        cmnd.DrugName = "newDrug3";
        cmnd.Manufacturer = "newMan3";
        cmnd.Purpose = "testing";
        cmnd.Usage = "do not use";
        cmnd.Dosage = "only during test";
        cmnd.SideEffects = "unknown";
        cmnd.Storage = "on github";
        cmnd.AvoidReasons = "if not test env";
        cmnd.Details = "lorem ipsum";
        cmnd.Ingredients = "lorem";

        //create drug and wait for response
        Task response;
        response = repo_manager.Drug.CreateDrug(cmnd);
        response.Wait();
        
        var check = await repo_manager.Drug.GetDrugsSummaryByName(cmnd.DrugName);
        var cid = check.ToList()[0].DrugId;
        cmnd.DrugId = (long?)cid;

        //update the drug
        cmnd.Manufacturer = "updated";
        Task updateCheck = repo_manager.Drug.UpdateDrug(cmnd);
        updateCheck.Wait();

        //check if drug was successfully updated in db
        var update_check = await repo_manager.Drug.GetDrugsSummaryByName(cmnd.DrugName);
        var update_cid = update_check.ToList()[0].DrugId;
        Assert.NotNull(update_cid);
        Assert.Equal(update_check.ToList()[0].DrugName,cmnd.DrugName);
        Assert.Equal(update_check.ToList()[0].Manufacturer,cmnd.Manufacturer);


        //delete drug created for testing purposes
        Task del_res = repo_manager.Drug.DeleteDrug((long)cmnd.DrugId);
        del_res.Wait();

    }

    //valid auth tokens
    [Theory]
    [InlineData("h0FsK78HXYCMTUSOKMDB1g")]
    [InlineData("q3p+BwCNBq0kVgZLU+oMZw")]
    [InlineData("ZGV0078ibQmYU5XWQWlpsg")]
    //no admin privilege update drug test
    public void updateDrugTest_adminFail(String authheader){
        //controller to invoke endpoint
        var newController = new MediFind.Backend.Features.Drug.DrugController(this.mock_mediator.Object,this.repo_manager);
        //set auth header in the current http context
        newController.ControllerContext = new Microsoft.AspNetCore.Mvc.ControllerContext();
        newController.ControllerContext.HttpContext = new DefaultHttpContext();
        newController.ControllerContext.HttpContext.Request.Headers["Authorization"] = authheader;

        //create a drug to be updated in db
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

        //assertion of bad http request exception
        Task response;
        Assert.ThrowsAsync<BadHttpRequestException>(()=>response = newController.UpdateDrug((long)2, drug,""));
    }

    //invalid auth tokens
    [Theory]
    [InlineData("8ehrfg7")]
    [InlineData(null)]
    //update drug not logged in test
    public void updateDrugTest_authFail(String authheader){
        //controller to invoke endpoint
        var newController = new MediFind.Backend.Features.Drug.DrugController(this.mock_mediator.Object,this.repo_manager);
        //set auth header and user id in the current http context
        newController.ControllerContext = new Microsoft.AspNetCore.Mvc.ControllerContext();
        newController.ControllerContext.HttpContext = new DefaultHttpContext();
        newController.ControllerContext.HttpContext.Request.Headers["Authorization"] = authheader;
        newController.ControllerContext.HttpContext.Items["UserId"] = null;

        //create a drug to be updated in db
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

        //assertion of bad http request exception
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