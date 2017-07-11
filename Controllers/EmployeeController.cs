using Microsoft.AspNetCore.Mvc;
using AngularTemplateDrivenFormsLab.Models;
using System;

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

        [HttpPost("[action]")]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult CheckUser([FromBody] Employee model)
        {
            var remoteValidationResult = new { result = true, message = $"{model.FirstName} is fine!" };
            if (model.FirstName?.Equals("Vahid", StringComparison.OrdinalIgnoreCase) ?? false)
            {
                remoteValidationResult = new { result = false, message = "username:`Vahid` is already taken." };
            }

            return Json(remoteValidationResult);
        }
    }
}
