using Xunit.Abstractions;
using Microsoft.Extensions.Configuration;
using MediFind.Backend.Features.User;
using Moq;
using MediatR;
using MediFind.Backend;
using Microsoft.AspNetCore.Http;

namespace SignInTests;

public class UnitTest3
{   
    private ITestOutputHelper output;
    private Dictionary<string,string> myconfig;
    private Mock<IMediator> mock_mediator;
    private IConfigurationRoot config;
    private DbContext curr_context;
    private RepositoryManager repo_manager;
    
    public UnitTest3(ITestOutputHelper output){
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
    [InlineData("test8@test.com","test8")]
    [InlineData("test9@test.com","test8")]
    public async void SignInTest_success(String username, String password)
    {        
        var handler = new SignInUser.Handler(this.repo_manager);
        
        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;

        var cmnd = new SignInUser.SignInUserCommand();
        cmnd.Email = username;
        cmnd.Password = password;
        
        SignInUser.SignInUserResponse response = await handler.Handle(cmnd,token);
    
        Assert.NotNull(response.SessionId);
        Assert.Equal(cmnd.Email,response.Email);
    }

    [Theory]
    [InlineData("hasin","test8")]
    [InlineData(null,"test8")]
    public async void SignInTest_invalidEmail(String username, String password)
    {        
        var handler = new SignInUser.Handler(this.repo_manager);
        
        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;

        var cmnd = new SignInUser.SignInUserCommand();
        cmnd.Email = username;
        cmnd.Password = password;
    
        Task<SignInUser.SignInUserResponse> response;
        await Assert.ThrowsAsync<BadHttpRequestException>(()=>response = handler.Handle(cmnd,token));
    }

    [Theory]
    [InlineData("test8@test.com","edfrgthj")]
    [InlineData("test9@test.com","frgthyju")]
    public async void SignInTest_invalidPass(String username, String password)
    {        
        var handler = new SignInUser.Handler(this.repo_manager);
        
        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;

        var cmnd = new SignInUser.SignInUserCommand();
        cmnd.Email = username;
        cmnd.Password = password;
    
        Task<SignInUser.SignInUserResponse> response;
        await Assert.ThrowsAsync<BadHttpRequestException>(()=>response = handler.Handle(cmnd,token));
    }

    [Theory]
    [InlineData("test8@test.com",null)]
    [InlineData("test9@test.com",null)]
    public async void SignInTest_missingPass(String username, String password)
    {        
        var handler = new SignInUser.Handler(this.repo_manager);
        
        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;

        var cmnd = new SignInUser.SignInUserCommand();
        cmnd.Email = username;
        cmnd.Password = password;
    
        Task<SignInUser.SignInUserResponse> response;
        await Assert.ThrowsAsync<System.ArgumentNullException>(()=>response = handler.Handle(cmnd,token));
    }

}