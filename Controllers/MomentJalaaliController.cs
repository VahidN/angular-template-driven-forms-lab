using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace AngularTemplateDrivenFormsLab.Controllers
{
    [Route("api/[controller]")]
    public class MomentJalaaliController : Controller
    {
        [HttpGet("[action]")]
        public IActionResult GetDates()
        {
            var dates = new List<DateTime>();
            for (var i = 0; i < 20; i++)
            {
                dates.Add(DateTime.Now.AddDays(-i));
            }
            return Json(dates);
        }
    }
}
