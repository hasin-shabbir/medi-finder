﻿using MediatR;
using MediFind.Backend;
using MediFind.Backend.Features.Common.Middleware;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

/* Custom dependency injections */
builder.Services.AddMediatR(Assembly.GetExecutingAssembly());
builder.Services.AddScoped<DbContext>();
builder.Services.AddScoped<RepositoryManager>();
builder.Services.AddHttpContextAccessor();

Dapper.DefaultTypeMap.MatchNamesWithUnderscores = true;

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseMiddleware<ExceptionMiddlware>();
app.UseMiddleware<AuthenticationMiddleware>();

//app.UseHttpsRedirection();

//app.UseAuthorization();

app.MapControllers();

app.Run();
