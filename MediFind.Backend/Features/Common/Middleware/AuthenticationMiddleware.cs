using MediFind.Backend.Features.Common.Attributes;

namespace MediFind.Backend.Features.Common.Middleware;

public class AuthenticationMiddleware
{
    private readonly RequestDelegate _next;

    public AuthenticationMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context, RepositoryManager repositoryManager)
    {
        AuthAttribute? authAttribute = context.GetEndpoint()?.Metadata.GetMetadata<AuthAttribute>();

        if (authAttribute != null)
        {
            string sessionId = context.Request.Headers["Authentication"];
            long userId = 0;

            if (!string.IsNullOrWhiteSpace(sessionId))
                userId = await repositoryManager.User.GetUserIdBySessionId(sessionId);

            if (userId < 1)
                throw new BadHttpRequestException("Invalid appuser session id", StatusCodes.Status401Unauthorized);
            else
            {
                context.Items["UserId"] = userId;
            }
        }

        await _next(context);
    }
}

