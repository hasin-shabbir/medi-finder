using Xunit.Abstractions;
using Microsoft.Extensions.Configuration;
using MediFind.Backend.Features.User;
using Moq;
using MediatR;
using MediFind.Backend;

namespace SignOutTests;

//driver to test signout functionality
public class SignOutTestClass
{   
    private ITestOutputHelper output; //output helper to log debugging output
    private Dictionary<string,string> myconfig; //config dictionary for the current context
    private Mock<IMediator> mock_mediator; //mock mediator for current context
    private IConfigurationRoot config; //configuration settings for current db context
    private DbContext curr_context; //current db context
    private RepositoryManager repo_manager; //repository manager for the current context
    
    //constructor to initialize all private variables
    public SignOutTestClass(ITestOutputHelper output){
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
    
    //helper function to mock a sign in
    private async Task<SignInUser.SignInUserResponse> signInMock(){
        var handler = new SignInUser.Handler(this.repo_manager);
        
        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;

        var cmnd = new SignInUser.SignInUserCommand();
        cmnd.Email = "test8@test.com";
        cmnd.Password = "test8";
        
        SignInUser.SignInUserResponse response = await handler.Handle(cmnd,token);

        return response;
    }

    [Fact]
    //test a successful signout
    public async void SignOutTest_success() {
        //get session id for the logged in user    
        var sessionId = signInMock().Result.SessionId;
        
        //handler for signout to invoke endpoint
        var handler = new SignOutUser.Handler(this.repo_manager);
        
        //cancellation token for endpoint
        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;

        //sign out user command
        var cmnd = new SignOutUser.SignOutUserCommand();
        cmnd.SessionId = sessionId;
        
        //invoke signout endpoint and wait for response
        SignOutUser.SignOutUserResponse response = await handler.Handle(cmnd,token);
    
        //assertion that response is not null and is a proper signout response
        Assert.NotNull(response);
        Assert.IsType<SignOutUser.SignOutUserResponse>(response);
    }

}