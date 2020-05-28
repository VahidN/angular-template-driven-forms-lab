using System.IO;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AngularTemplateDrivenFormsLab.Controllers
{
    class CspPost
    {
        [JsonPropertyName("csp-report")]
        public CspReport CspReport { get; set; }
    }

    class CspReport
    {
        [JsonPropertyName("document-uri")]
        public string DocumentUri { get; set; }

        [JsonPropertyName("referrer")]
        public string Referrer { get; set; }

        [JsonPropertyName("violated-directive")]
        public string ViolatedDirective { get; set; }

        [JsonPropertyName("effective-directive")]
        public string EffectiveDirective { get; set; }

        [JsonPropertyName("original-policy")]
        public string OriginalPolicy { get; set; }

        [JsonPropertyName("disposition")]
        public string Disposition { get; set; }

        [JsonPropertyName("blocked-uri")]
        public string BlockedUri { get; set; }

        [JsonPropertyName("line-number")]
        public int LineNumber { get; set; }

        [JsonPropertyName("column-number")]
        public int ColumnNumber { get; set; }

        [JsonPropertyName("source-file")]
        public string SourceFile { get; set; }

        [JsonPropertyName("status-code")]
        public string StatusCode { get; set; }

        [JsonPropertyName("script-sample")]
        public string ScriptSample { get; set; }
    }

    [Route("api/[controller]")]
    public class CspReportController : Controller
    {
        [HttpPost("[action]")]
        [IgnoreAntiforgeryToken]
        public async Task<IActionResult> Log()
        {
            /* a sample payload:
            {
              "csp-report": {
                "document-uri": "http://localhost:5000/untypedSha",
                "referrer": "",
                "violated-directive": "script-src",
                "effective-directive": "script-src",
                "original-policy": "default-src 'self'; style-src 'self'; script-src 'self'; font-src 'self'; img-src 'self' data:; connect-src 'self'; media-src 'self'; object-src 'self'; report-uri /api/Home/CspReport",
                "disposition": "enforce",
                "blocked-uri": "eval",
                "line-number": 21,
                "column-number": 8,
                "source-file": "http://localhost:5000/scripts.bundle.js",
                "status-code": 200,
                "script-sample": ""
              }
            }
            */

            CspPost cspPost;
            using (var bodyReader = new StreamReader(this.HttpContext.Request.Body))
            {
                var body = await bodyReader.ReadToEndAsync().ConfigureAwait(false);
                this.HttpContext.Request.Body = new MemoryStream(Encoding.UTF8.GetBytes(body));
                cspPost = JsonSerializer.Deserialize<CspPost>(body);
            }

            //TODO: log cspPost

            return Ok();
        }
    }
}
