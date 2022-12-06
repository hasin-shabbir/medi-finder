using Xunit.Abstractions;
using Microsoft.Extensions.Configuration;
using MediFind.Backend.Features.User;
using Moq;
using MediatR;
using MediFind.Backend;
using Microsoft.AspNetCore.Http;

namespace UserTests;

public class UnitTest2
{   
    private ITestOutputHelper output;
    private Dictionary<string,string> myconfig;
    private Mock<IMediator> mock_mediator;
    private IConfigurationRoot config;
    private DbContext curr_context;
    private RepositoryManager repo_manager;
    
    public UnitTest2(ITestOutputHelper output){
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
    public async void SignUpTest()
    {        
        // var newController = new MediFind.Backend.Features.User.UserController(this.mock_mediator.Object,this.repo_manager);
        var handler = new SignUpUser.Handler(this.repo_manager);
        
        var cmnd = new SignUpUser.SignUpUserCommand();
        cmnd.Email = "test10@test.com";
        cmnd.Password = "test8";
        cmnd.FullName = "johndoe";

        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;

        SignUpUser.SignUpUserResponse response = await handler.Handle(cmnd,token);

        Assert.Equal(cmnd.Email,response.Email);
    }

    [Theory]
    [InlineData(null)]
    public async void SignUpTest_missingEmail(String email)
    {        
        // var newController = new MediFind.Backend.Features.User.UserController(this.mock_mediator.Object,this.repo_manager);
        var handler = new SignUpUser.Handler(this.repo_manager);
        
        var cmnd = new SignUpUser.SignUpUserCommand();
        cmnd.Email = email;
        cmnd.Password = "test8";
        cmnd.FullName = "johndoe";

        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;

        Task<SignUpUser.SignUpUserResponse> response;
        await Assert.ThrowsAsync<Npgsql.PostgresException>(()=>response = handler.Handle(cmnd,token));
    }

    [Theory]
    [InlineData(null)]
    public async void SignUpTest_missingPass(String password)
    {        
        // var newController = new MediFind.Backend.Features.User.UserController(this.mock_mediator.Object,this.repo_manager);
        var handler = new SignUpUser.Handler(this.repo_manager);
        
        var cmnd = new SignUpUser.SignUpUserCommand();
        cmnd.Email = "test404@test.com";
        cmnd.Password = password;
        cmnd.FullName = "johndoe";

        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;

        Task<SignUpUser.SignUpUserResponse> response;
        await Assert.ThrowsAsync<System.ArgumentNullException>(()=>response = handler.Handle(cmnd,token));
    }

    [Theory]
    [InlineData(null)]
    public async void SignUpTest_missingUserName(String username)
    {        
        // var newController = new MediFind.Backend.Features.User.UserController(this.mock_mediator.Object,this.repo_manager);
        var handler = new SignUpUser.Handler(this.repo_manager);
        
        var cmnd = new SignUpUser.SignUpUserCommand();
        cmnd.Email = "test404@test.com";
        cmnd.Password = "hiii4";
        cmnd.FullName = username;

        CancellationTokenSource cancelTokenSource = new CancellationTokenSource();
        CancellationToken token = cancelTokenSource.Token;

        Task<SignUpUser.SignUpUserResponse> response;
        await Assert.ThrowsAsync<Npgsql.PostgresException>(()=>response = handler.Handle(cmnd,token));

    }

}