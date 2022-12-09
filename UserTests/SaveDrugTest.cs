using Xunit.Abstractions;
using Microsoft.Extensions.Configuration;
using Moq;
using MediatR;
using MediFind.Backend;

namespace SaveDrugTests;

//driver class to test save drug functionality
public class SaveDrugTestClass
{   
    private ITestOutputHelper output; //output helper to log debugging output
    private Dictionary<string,string> myconfig; //config dictionary for the current context
    private Mock<IMediator> mock_mediator; //mock mediator for current context
    private IConfigurationRoot config; //configuration settings for current db context
    private DbContext curr_context; //current db context
    private RepositoryManager repo_manager; //repository manager for the current context
    
    //constructor to initialize all private variables
    public SaveDrugTestClass(ITestOutputHelper output){
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

    //valid user and drug id
    [Theory]
    [InlineData((long)5, 9)]
    public async void SaveAndGetSavedDrugTest(long userId, int drugid) { 
        //save a drug in db   
        await repo_manager.User.SaveDrug(userId,drugid);

        //get the saved drugs for the specified user
        var response = await repo_manager.User.GetSavedDrugs(userId);
        //convert response to an iteratable list
        var res_list = response.ToList();
        //variable to see if test passes
        bool passing = false;
        //search for the saved drug's id in user's saved drugs
        foreach (var res in res_list){
            if (res.DrugId == drugid){
                passing = true;
                break;
            }
        }
        //delete the drug from user's list which was saved just for testing
        await repo_manager.User.DeleteUSD(userId,drugid);
        //assertion
        Assert.True(passing);
    }

}