using Microsoft.AspNetCore.Mvc;

namespace AngularTemplateDrivenFormsLab.Controllers
{
    [Route("api/[controller]")]
    public class UrlencodedController : Controller
    {
        [HttpPost]
        public IActionResult Post(string refresh_token)
        {
            return Ok(new { refresh_token = refresh_token });
        }
    }
}
