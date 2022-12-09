using Xunit.Abstractions;
using Microsoft.Extensions.Configuration;
using MediFind.Backend.Features.User;
using Moq;
using MediatR;
using MediFind.Backend;

namespace SignUpTests;

//driver to test sign up functionality
public class SignUpTestClass
{   
     private ITestOutputHelper output; //output helper to log debugging output
    private Dictionary<string,string> myconfig; //config dictionary for the current context
    private Mock<IMediator> mock_mediator; //mock mediator for current context
    private IConfigurationRoot config; //configuration settings for current db context
    private DbContext curr_context; //current db context
    private RepositoryManager repo_manager; //repository manager for the current context
    
    //constructor to initialize all private variables
    public SignUpTestClass(ITestOutputHelper output){
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

    [Fact]
    //successful signup test
    public async void SignUpTest()
    {        
        //handler for sign up to invoke endpoint
        var handler = new SignUpUser.Handler(this.repo_manager);

        //cancellation token for endpoint
        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;
        
        //sign up user command
        var cmnd = new SignUpUser.SignUpUserCommand();
        cmnd.Email = "test19@test.com";
        cmnd.Password = "test8";
        cmnd.FullName = "johndoe";

        //invoke endpoint and wait for response    
        SignUpUser.SignUpUserResponse response = await handler.Handle(cmnd,token);

        //delete the user created for testing purposes
        await repo_manager.User.DeleteSession(response.SessionId); 
        await repo_manager.User.DeleteUser(cmnd.Email);

        //assertion if created and stored user is the correct one
        Assert.Equal(cmnd.Email,response.Email);
    }

    //missing email data
    [Theory]
    [InlineData(null)]
    //test for signup without email
    public async void SignUpTest_missingEmail(String email)
    {        
        //handler for sign up to invoke endpoint
        var handler = new SignUpUser.Handler(this.repo_manager);

        //cancellation token for endpoint
        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;
        
        //sign up user command
        var cmnd = new SignUpUser.SignUpUserCommand();
        cmnd.Email = email;
        cmnd.Password = "test8";
        cmnd.FullName = "johndoe";

        //assertion for database rule violation exception
        Task<SignUpUser.SignUpUserResponse> response;
        await Assert.ThrowsAsync<Npgsql.PostgresException>(()=>response = handler.Handle(cmnd,token));

    }

    //missing password data
    [Theory]
    [InlineData(null)]
    public async void SignUpTest_missingPass(String password)
    {        
        //handler for sign up to invoke endpoint
        var handler = new SignUpUser.Handler(this.repo_manager);

        //cancellation token for endpoint
        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;
        
        //sign up user command
        var cmnd = new SignUpUser.SignUpUserCommand();
        cmnd.Email = "test404@test.com";
        cmnd.Password = password;
        cmnd.FullName = "johndoe";

        //assertion for null argument exception
        Task<SignUpUser.SignUpUserResponse> response;
        await Assert.ThrowsAsync<System.ArgumentNullException>(()=>response = handler.Handle(cmnd,token));
    }

    //missing username data
    [Theory]
    [InlineData(null)]
    public async void SignUpTest_missingUserName(String username)
    {        
        //handler for sign up to invoke endpoint
        var handler = new SignUpUser.Handler(this.repo_manager);

        //cancellation token for endpoint
        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;
        
        //sign up user command
        var cmnd = new SignUpUser.SignUpUserCommand();
        cmnd.Email = "test404@test.com";
        cmnd.Password = "hiii4";
        cmnd.FullName = username;

        //assertion for database rule violation exception
        Task<SignUpUser.SignUpUserResponse> response;
        await Assert.ThrowsAsync<Npgsql.PostgresException>(()=>response = handler.Handle(cmnd,token));

    }
    //TODO: 
    //1. Delete user after signup test
}