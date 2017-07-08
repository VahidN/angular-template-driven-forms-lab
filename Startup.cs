using System;
using System.IO;
using AngularTemplateDrivenFormsLab.Utils;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace AngularTemplateDrivenFormsLab
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAntiforgery(x => x.HeaderName = "X-XSRF-TOKEN");
            services.AddMvc(options =>
            {
                options.Filters.Add(new AutoValidateAntiforgeryTokenAttribute());
            });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseAngularAntiforgeryToken();

            app.Use(async (context, next) =>
            {
                await next();
                var path = context.Request.Path.Value;
                if (path != null &&
                    context.Response.StatusCode == 404 &&
                    !Path.HasExtension(path) &&
                    !path.StartsWith("/api/", StringComparison.OrdinalIgnoreCase))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

            app.UseMvcWithDefaultRoute();
            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}
