using Microsoft.AspNetCore.Mvc;
using AngularTemplateDrivenFormsLab.Models;

namespace AngularTemplateDrivenFormsLab.Controllers
{
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        public IActionResult Post([FromBody] Employee model)
        {
            //todo: save model

            model.Id = 100;
            return Created("", new { fields = model });
        }

        [HttpGet("/api/[controller]/[action]")]
        public IActionResult Languages()
        {
            string[] languages = { "Persian", "English", "Spanish", "Other" };
            return Ok(languages);
        }
    }
}
