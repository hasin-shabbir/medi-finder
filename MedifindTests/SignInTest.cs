using Xunit.Abstractions;
using Microsoft.Extensions.Configuration;
using MediFind.Backend.Features.User;
using Moq;
using MediatR;
using MediFind.Backend;
using Microsoft.AspNetCore.Http;

namespace SignInTests;

//driver to test sign in functionality
public class SignInTestClass
{   
    private ITestOutputHelper output; //output helper to log debugging output
    private Dictionary<string,string> myconfig; //config dictionary for the current context
    private Mock<IMediator> mock_mediator; //mock mediator for current context
    private IConfigurationRoot config; //configuration settings for current db context
    private DbContext curr_context; //current db context
    private RepositoryManager repo_manager; //repository manager for the current context
    
    //constructor to initialize all private variables
    public SignInTestClass(ITestOutputHelper output){
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
    
    //valid user email and password
    [Theory]
    [InlineData("test8@test.com","test8")]
    [InlineData("test9@test.com","test8")]
    //test for successful signin
    public async void SignInTest_success(String username, String password)
    {        
        //handler for sign in to invoke endpoint
        var handler = new SignInUser.Handler(this.repo_manager);

        //cancellation token for endpoint
        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;

        //sign in user command
        var cmnd = new SignInUser.SignInUserCommand();
        cmnd.Email = username;
        cmnd.Password = password;

        //invoke endpoint and wait for response    
        SignInUser.SignInUserResponse response = await handler.Handle(cmnd,token);

        //ccheck if session id generated for the specified user
        Assert.NotNull(response.SessionId);
        Assert.Equal(cmnd.Email,response.Email);
    }

    //invalid email ids
    [Theory]
    [InlineData("hasin","test8")]
    [InlineData(null,"test8")]
    //test for signin with invalid email
    public async void SignInTest_invalidEmail(String username, String password)
    {        
        //handler for sign in to invoke endpoint
        var handler = new SignInUser.Handler(this.repo_manager);

        //cancellation token for endpoint
        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;

        //sign in user command
        var cmnd = new SignInUser.SignInUserCommand();
        cmnd.Email = username;
        cmnd.Password = password;
    
        //assertion for bad request exception
        Task<SignInUser.SignInUserResponse> response;
        await Assert.ThrowsAsync<BadHttpRequestException>(()=>response = handler.Handle(cmnd,token));
    }

    //wrong passwords
    [Theory]
    [InlineData("test8@test.com","edfrgthj")]
    [InlineData("test9@test.com","frgthyju")]
    //test for signin with invalid password
    public async void SignInTest_invalidPass(String username, String password)
    {        
        //handler for sign in to invoke endpoint
        var handler = new SignInUser.Handler(this.repo_manager);
        
        //cancellation token for endpoint
        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;

        //sign in user command
        var cmnd = new SignInUser.SignInUserCommand();
        cmnd.Email = username;
        cmnd.Password = password;
    
        //assertion for bad request exception
        Task<SignInUser.SignInUserResponse> response;
        await Assert.ThrowsAsync<BadHttpRequestException>(()=>response = handler.Handle(cmnd,token));
    }

    //missing passwords
    [Theory]
    [InlineData("test8@test.com",null)]
    [InlineData("test9@test.com",null)]
    public async void SignInTest_missingPass(String username, String password)
    {        
        //handler for sign in to invoke endpoint
        var handler = new SignInUser.Handler(this.repo_manager);
        
        //cancellation token for endpoint
        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;

        //sign in user command
        var cmnd = new SignInUser.SignInUserCommand();
        cmnd.Email = username;
        cmnd.Password = password;
    
        //assertion for null argumnet exception
        Task<SignInUser.SignInUserResponse> response;
        await Assert.ThrowsAsync<System.ArgumentNullException>(()=>response = handler.Handle(cmnd,token));
    }

}