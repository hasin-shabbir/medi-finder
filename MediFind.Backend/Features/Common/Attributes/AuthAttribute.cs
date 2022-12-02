namespace MediFind.Backend.Features.Common.Attributes;

[AttributeUsage(AttributeTargets.Method | AttributeTargets.Property)]
public class AuthAttribute : Attribute
{
    public string? Claims;
}
