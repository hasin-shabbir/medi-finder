using Xunit.Abstractions;
using Microsoft.Extensions.Configuration;
using MediFind.Backend.Features.Drug;
using Moq;
using MediatR;
using MediFind.Backend;
using Microsoft.AspNetCore.Http;


namespace UserTests;


public class UnitTest1
{   
    private ITestOutputHelper output;
    private Dictionary<string,string> myconfig;
    private Mock<IMediator> mock_mediator;
    private IConfigurationRoot config;
    private DbContext curr_context;
    private RepositoryManager repo_manager;
    
    public UnitTest1(ITestOutputHelper output){
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

    //search by QR code test
    [Fact]
    public void SearchDrugByIdTest()
    {        
        var newController = new MediFind.Backend.Features.Drug.DrugController(this.mock_mediator.Object,this.repo_manager);
        var response = newController.GetDrugById(13);
        response.Wait();
    
        Assert.Equal(13,response.Result.DrugId);
    }

    //search by name, ingredient, and/or manufacturer
    [Theory]
    [InlineData("str",null,null)]
    [InlineData("Str",null,null)]
    [InlineData(null,"str",null)]
    [InlineData(null,"Str",null)]
    [InlineData(null,null,"str")]
    [InlineData(null,null,"Str")]
    public void SearchDrugTest(string? name,string? ingredients, string? manufacturer){        
        var newController = new MediFind.Backend.Features.Drug.DrugController(this.mock_mediator.Object,this.repo_manager);
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
        Assert.ThrowsAsync<BadHttpRequestException>(()=>response = newController.UpdateDrug((long)2, drug));
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
        Assert.ThrowsAsync<BadHttpRequestException>(()=>response = newController.UpdateDrug((long)2, drug));
    }

     /**********************************/
    //INSERT HERE UPDATE DRUG SUCCESS//
    /********************************/


    [Theory]
    [InlineData("h0FsK78HXYCMTUSOKMDB1g")]
    [InlineData("q3p+BwCNBq0kVgZLU+oMZw")]
    [InlineData("ZGV0078ibQmYU5XWQWlpsg")]
    public void deleteDrugTest_adminFail(String authheader){
        var newController = new MediFind.Backend.Features.Drug.DrugController(this.mock_mediator.Object,this.repo_manager);
        
        newController.ControllerContext = new Microsoft.AspNetCore.Mvc.ControllerContext();
        newController.ControllerContext.HttpContext = new DefaultHttpContext();
        newController.ControllerContext.HttpContext.Request.Headers["Authorization"] = authheader;

        Task response;
        Assert.ThrowsAsync<BadHttpRequestException>(()=>response = newController.DeleteDrug((long)2));
    }

    [Theory]
    [InlineData("huokd73")]
    [InlineData(null)]
    public void deleteDrugTest_authFail(String authheader){
        var newController = new MediFind.Backend.Features.Drug.DrugController(this.mock_mediator.Object,this.repo_manager);
        
        newController.ControllerContext = new Microsoft.AspNetCore.Mvc.ControllerContext();
        newController.ControllerContext.HttpContext = new DefaultHttpContext();
        newController.ControllerContext.HttpContext.Request.Headers["Authorization"] = authheader;
        newController.ControllerContext.HttpContext.Items["UserId"] = null;

        Task response;
        Assert.ThrowsAsync<BadHttpRequestException>(()=>response = newController.DeleteDrug((long)2));
    }

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