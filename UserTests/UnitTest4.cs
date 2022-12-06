using Xunit.Abstractions;
using Microsoft.Extensions.Configuration;
using MediFind.Backend.Features.User;
using Moq;
using MediatR;
using MediFind.Backend;
using Microsoft.AspNetCore.Http;

namespace SignOutTests;

public class UnitTest4
{   
    private ITestOutputHelper output;
    private Dictionary<string,string> myconfig;
    private Mock<IMediator> mock_mediator;
    private IConfigurationRoot config;
    private DbContext curr_context;
    private RepositoryManager repo_manager;
    
    public UnitTest4(ITestOutputHelper output){
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
    public async void SignOutTest_success() {    
        var sessionId = signInMock().Result.SessionId;

        var handler = new SignOutUser.Handler(this.repo_manager);
        
        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;

        var cmnd = new SignOutUser.SignOutUserCommand();
        cmnd.SessionId = sessionId;
        
        SignOutUser.SignOutUserResponse response = await handler.Handle(cmnd,token);
    
        Assert.NotNull(response);
        Assert.IsType<SignOutUser.SignOutUserResponse>(response);
    }

}