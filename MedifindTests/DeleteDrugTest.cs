using Xunit.Abstractions;
using Microsoft.Extensions.Configuration;
using Moq;
using MediatR;
using MediFind.Backend;
using MediFind.Backend.Features.Drug;
using Microsoft.AspNetCore.Http;

namespace DeleteDrugTests;

//driver class to test delete drug functionality
public class DeleteDrugTestClass
{   
    private ITestOutputHelper output; //output helper to log debugging output
    private Dictionary<string,string> myconfig; //config dictionary for the current context
    private Mock<IMediator> mock_mediator; //mock mediator for current context
    private IConfigurationRoot config; //configuration settings for current db context
    private DbContext curr_context; //current db context
    private RepositoryManager repo_manager; //repository manager for the current context
    
    //constructor to initialize all private variables
    public DeleteDrugTestClass(ITestOutputHelper output){
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
    //admin logged in to delete drug
    public async void deleteDrugTest_success(String authheader){
        //controller to invoke endpoint
        var newController = new MediFind.Backend.Features.Drug.DrugController(this.mock_mediator.Object,this.repo_manager);
        //set auth header in the current http context
        newController.ControllerContext = new Microsoft.AspNetCore.Mvc.ControllerContext();
        newController.ControllerContext.HttpContext = new DefaultHttpContext();
        newController.ControllerContext.HttpContext.Request.Headers["Authorization"] = authheader;
        newController.ControllerContext.HttpContext.Items["UserId"] = (long)8; //admin user id

        //create a drug to be stored in db
        var cmnd = new DrugModel();
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

        //create drug and wait for response
        Task response;
        response = repo_manager.Drug.CreateDrug(cmnd);
        response.Wait();

        //check if created drug was successfully stored in db
        var check = await repo_manager.Drug.GetDrugsSummaryByName("newDrug1");
        var cid = check.ToList()[0].DrugId;
        Assert.NotNull(cid);
        Assert.Equal(check.ToList()[0].DrugName,cmnd.DrugName);

        //delete drug created for testing purposes
        Task del_res = repo_manager.Drug.DeleteDrug((long)cid);
        del_res.Wait();

        //check if drug deleted successfully
        Assert.True(del_res.IsCompletedSuccessfully);

    }

    //valid auth tokens
    [Theory]
    [InlineData("h0FsK78HXYCMTUSOKMDB1g")]
    [InlineData("q3p+BwCNBq0kVgZLU+oMZw")]
    [InlineData("ZGV0078ibQmYU5XWQWlpsg")]
    //no admin privilege delete drug test
    public void deleteDrugTest_adminFail(String authheader){
        //controller to invoke endpoint
        var newController = new MediFind.Backend.Features.Drug.DrugController(this.mock_mediator.Object,this.repo_manager);
        //set auth header in the current http context
        newController.ControllerContext = new Microsoft.AspNetCore.Mvc.ControllerContext();
        newController.ControllerContext.HttpContext = new DefaultHttpContext();
        newController.ControllerContext.HttpContext.Request.Headers["Authorization"] = authheader;

        //assertion of bad http request exception
        Task response;
        Assert.ThrowsAsync<BadHttpRequestException>(()=>response = newController.DeleteDrug((long)2,""));
    }

    //invalid auth tokens
    [Theory]
    [InlineData("huokd73")]
    [InlineData(null)]
    //not logged in delete drug test
    public void deleteDrugTest_authFail(String authheader){
        //controller to invoke endpoint
        var newController = new MediFind.Backend.Features.Drug.DrugController(this.mock_mediator.Object,this.repo_manager);
        //set auth header and user id in the current http context
        newController.ControllerContext = new Microsoft.AspNetCore.Mvc.ControllerContext();
        newController.ControllerContext.HttpContext = new DefaultHttpContext();
        newController.ControllerContext.HttpContext.Request.Headers["Authorization"] = authheader;
        newController.ControllerContext.HttpContext.Items["UserId"] = null;
        
        //assertion of bad http request exception
        Task response;
        Assert.ThrowsAsync<BadHttpRequestException>(()=>response = newController.DeleteDrug((long)2,""));
    }

}