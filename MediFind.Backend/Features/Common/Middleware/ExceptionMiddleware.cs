namespace MediFind.Backend.Features.Common.Middleware;

public class ExceptionMiddlware
{
    private readonly RequestDelegate _next;

    public ExceptionMiddlware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await (_next(context));
        }
        catch (Exception exception)
        {
            await HandleException(context, exception);
            Console.WriteLine(exception);
        }
    }

    private static async Task HandleException(HttpContext context, Exception exception)
    {
        context.Response.ContentType = "application/json";

        if (exception is BadHttpRequestException badHttpRequestException)
        {
            context.Response.StatusCode = badHttpRequestException.StatusCode;
            await context.Response.WriteAsync("{\"message\": \"" + badHttpRequestException.Message + "\"}");
        }
        else
            context.Response.StatusCode = StatusCodes.Status500InternalServerError;
    }
}
