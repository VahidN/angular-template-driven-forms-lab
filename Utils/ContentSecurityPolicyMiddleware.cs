using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace AngularTemplateDrivenFormsLab.Utils
{
    public class ContentSecurityPolicyMiddleware
    {
        private readonly RequestDelegate _next;

        public ContentSecurityPolicyMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public Task Invoke(HttpContext context)
        {
            context.Response.Headers.Add("X-Frame-Options", "SAMEORIGIN");
            context.Response.Headers.Add("X-Xss-Protection", "1; mode=block");
            context.Response.Headers.Add("X-Content-Type-Options", "nosniff");

            string[] csp =
            {
              "default-src 'self'",
              "style-src 'self' 'unsafe-inline'",
              "script-src 'self' https://freegeoip.net/ 'unsafe-inline' 'unsafe-eval' ",
              "font-src 'self'",
              "img-src 'self' data:",
              "connect-src 'self'",
              "media-src 'self'",
              "object-src 'self'",
              "report-uri /api/CspReport/Log" //TODO: Add api/CspReport/Log
            };
            context.Response.Headers.Add("Content-Security-Policy", string.Join("; ", csp));
            return _next(context);
        }
    }

    public static class ContentSecurityPolicyMiddlewareExtensions
    {
        /// <summary>
        /// Make sure you add this code BEFORE app.UseStaticFiles();,
        /// otherwise the headers will not be applied to your static files.
        /// </summary>
        public static IApplicationBuilder UseContentSecurityPolicy(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ContentSecurityPolicyMiddleware>();
        }
    }
}
