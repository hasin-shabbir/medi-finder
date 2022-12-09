using Xunit.Abstractions;
using Microsoft.Extensions.Configuration;
using Moq;
using MediatR;
using MediFind.Backend;

namespace SearchDrugTests;

//driver class to test search drug functionality
public class SearchDrugTestClass
{   
    private ITestOutputHelper output; //output helper to log debugging output
    private Dictionary<string,string> myconfig; //config dictionary for the current context
    private Mock<IMediator> mock_mediator; //mock mediator for current context
    private IConfigurationRoot config; //configuration settings for current db context
    private DbContext curr_context; //current db context
    private RepositoryManager repo_manager; //repository manager for the current context
    
    //constructor to initialize all private variables
    public SearchDrugTestClass(ITestOutputHelper output){
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

    //search by QR code or ID test
    [Fact]
    public void SearchDrugByIdTest()
    {        
        //controller to invoke endpoint
        var newController = new MediFind.Backend.Features.Drug.DrugController(this.mock_mediator.Object,this.repo_manager);
        //invoke endpoint for search by id and wait for response
        var response = newController.GetDrugById(13);
        response.Wait();
    
        //assertion
        Assert.Equal(13,response.Result.DrugId);
    }

    //search by name, ingredient, and/or manufacturer
    [Theory]
    [InlineData("Benylin",null,null)] //search by name
    [InlineData("benylin",null,null)] //search by name
    [InlineData(null,"para",null)] //search by ingredient
    [InlineData(null,"Para",null)] //search by ingredient
    [InlineData(null,null,"str")] //search by manufacturer
    [InlineData(null,null,"Str")] //search by manufacturer
    public void SearchDrugTest(String? name,String? ingredients, String? manufacturer){
        //controller to invoke endpoints        
        var newController = new MediFind.Backend.Features.Drug.DrugController(this.mock_mediator.Object,this.repo_manager);
        //invoke endpoint for search drugs and wait for response
        var response = newController.SearchDrugs(name,ingredients,manufacturer);
        response.Wait();
        
        bool name_pass = true; //true if search by name passes, false otherwise
        bool ing_pass = true; //true if search by ingredient passes, false otherwise
        bool manufacturer_pass = true; //true if search by manufacturer passes, false otherwise
        var res_list = response.Result.ToList(); //convert response to an iteratable list

        //check if responses contain only the drugs with the name specified
        if (name!=null){
            foreach (var res in res_list){
                if (res.DrugName==null || !(res.DrugName.ToLower().Contains(name.ToLower()))){
                    name_pass = false;
                    break;
                }
            }
        }

        //check if responses contain only the drugs with the ingredient specified
        if (name_pass && ingredients!=null){
            foreach (var res in res_list){
                if (res.Ingredients==null || !(res.Ingredients.ToLower().Contains(ingredients.ToLower()))){
                    ing_pass = false;
                    break;
                }
            }
        }

        //check if responses contain only the drugs with the manufacturer specified
        if (name_pass && ing_pass && manufacturer!=null){
            foreach (var res in res_list){
                if (res.Manufacturer==null || !(res.Manufacturer.ToLower().Contains(manufacturer.ToLower()))){
                    manufacturer_pass = false;
                    break;
                }
            }
        }

        //assertions
        Assert.True(name_pass);
        Assert.True(ing_pass);
        Assert.True(manufacturer_pass);
    }

}