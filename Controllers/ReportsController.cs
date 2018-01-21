using Microsoft.AspNetCore.Mvc;

namespace AngularTemplateDrivenFormsLab.Controllers
{
    [Route("api/[controller]")]
    public class ReportsController : Controller
    {
        [HttpGet("[action]")]
        public IActionResult GetPdfReport()
        {
            return File(virtualPath: "~/assets/sample.pdf",
                        contentType: "application/pdf",
                        fileDownloadName: "sample.pdf");
        }
    }
}
