using Microsoft.AspNetCore.Mvc;

namespace AngularTemplateDrivenFormsLab.Controllers
{
    [Route("api/[controller]")]
    public class ShowImagesController : Controller
    {
        [HttpGet("[action]")]
        public IActionResult GetImage()
        {
            return File("~/assets/resume.png", "image/png");
        }
    }
}
