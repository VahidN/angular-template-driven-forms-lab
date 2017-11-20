using AngularTemplateDrivenFormsLab.Models;
using Microsoft.AspNetCore.Mvc;

namespace AngularTemplateDrivenFormsLab.Controllers
{
    [Route("api/[controller]")]
    public class MoviesController : Controller
    {
        [HttpPost]
        public IActionResult Post([FromBody]Movie movie)
        {
            if (ModelState.IsValid)
            {
                // TODO: save ...
                return Ok(movie);
            }

            ModelState.AddModelError("", "This record already exists."); // a cross field validation
            return BadRequest(ModelState);
        }
    }
}
