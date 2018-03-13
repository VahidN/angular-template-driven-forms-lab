using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AngularTemplateDrivenFormsLab.Controllers
{
    [Route("api/[controller]")]
    public class TypeaheadController : Controller
    {
        [HttpGet("[action]")]
        public async Task<IActionResult> SearchCountries(string term)
        {
            await Task.Delay(1000); // simulating an slow operation

            var items = new[]
                {
                     "Afghanistan",
                     "Albania",
                     "Algeria",
                     "American Samoa",
                     "Andorra",
                     "Angola",
                     "Anguilla",
                     "Antarctica",
                     "Antigua and/or Barbuda"
                };
            var results = string.IsNullOrWhiteSpace(term) ? items :
                           items.Where(item => item.StartsWith(term, StringComparison.OrdinalIgnoreCase));
            return Json(results.ToArray());
        }
    }
}
