using Xunit.Abstractions;
using Microsoft.Extensions.Configuration;
using Moq;
using MediatR;
using MediFind.Backend;

namespace SearchDrugTests;

public class SearchDrugTestClass
{   
    private ITestOutputHelper output;
    private Dictionary<string,string> myconfig;
    private Mock<IMediator> mock_mediator;
    private IConfigurationRoot config;
    private DbContext curr_context;
    private RepositoryManager repo_manager;
    
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
    [InlineData("Benylin",null,null)]
    [InlineData(null,"str",null)]
    [InlineData(null,"Str",null)]
    [InlineData(null,null,"str")]
    [InlineData(null,null,"Str")]
    public void SearchDrugTest(String? name,String? ingredients, String? manufacturer){        
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