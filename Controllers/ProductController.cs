using System;
using System.Linq;
using System.Threading.Tasks;
using AngularTemplateDrivenFormsLab.Models;
using Microsoft.AspNetCore.Mvc;

namespace AngularTemplateDrivenFormsLab.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        [HttpGet("[action]")]
        public async Task<IActionResult> GetCategories()
        {
            await Task.Delay(500);

            return Json(CategoriesDataSource.Items);
        }

        [HttpGet("[action]/{categoryId:int}")]
        public async Task<IActionResult> GetProducts(int categoryId)
        {
            //throw new Exception();
            await Task.Delay(500);

            var products = CategoriesDataSource.Items
                            .Where(category => category.CategoryId == categoryId)
                            .SelectMany(category => category.Products)
                            .ToList();
            return Json(products);
        }
    }
}
