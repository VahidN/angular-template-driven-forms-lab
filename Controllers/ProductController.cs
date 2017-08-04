using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AngularTemplateDrivenFormsLab.Models;
using AngularTemplateDrivenFormsLab.Utils;
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

        [HttpGet("[action]")]
        public PagedQueryResult<Product> GetPagedProducts(ProductQueryViewModel queryModel)
        {
            var pagedResult = new PagedQueryResult<Product>();

            var query = ProductDataSource.LatestProducts
                                         .AsQueryable();

            //TODO: Apply Filtering ... .where(p => p....) ...

            var columnsMap = new Dictionary<string, Expression<Func<Product, object>>>()
            {
                ["productId"] = p => p.ProductId,
                ["productName"] = p => p.ProductName,
                ["isAvailable"] = p => p.IsAvailable,
                ["price"] = p => p.Price
            };
            query = query.ApplyOrdering(queryModel, columnsMap);

            pagedResult.TotalItems = query.Count();

            query = query.ApplyPaging(queryModel);

            pagedResult.Items = query.ToList();

            return pagedResult;
        }

        [HttpPost("[action]")]
        public IActionResult AddProduct([FromBody] Product model)
        {
            //todo: save model

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var rnd = new Random();
            model.ProductId = rnd.Next(1501, 2000);
            ProductDataSource.LatestProducts.Add(model);

            return Created("", model);
        }

        [HttpPut("[action]/{id:int}")]
        public IActionResult UpdateProduct(int id, [FromBody] Product model)
        {
            //todo: update model

            if (!ModelState.IsValid || id != model.ProductId)
            {
                return BadRequest();
            }

            var item = ProductDataSource.LatestProducts.FirstOrDefault(x => x.ProductId == id);
            if (item == null)
            {
                return NotFound();
            }

            item.IsAvailable = model.IsAvailable;
            item.Price = model.Price;
            item.ProductName = model.ProductName;

            return Created("", model);
        }

        [HttpDelete("[action]/{id:int}")]
        public IActionResult DeleteProduct(int id)
        {
            //todo: delete model
            var item = ProductDataSource.LatestProducts.FirstOrDefault(x => x.ProductId == id);
            if (item == null)
            {
                return NotFound();
            }
            ProductDataSource.LatestProducts.Remove(item);
            return Ok();
        }
    }
}
