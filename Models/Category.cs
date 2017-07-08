using System.Collections.Generic;
using Newtonsoft.Json;

namespace AngularTemplateDrivenFormsLab.Models
{
    public class Category
    {
        public int CategoryId { set; get; }
        public string CategoryName { set; get; }

        [JsonIgnore]
        public IList<Product> Products { set; get; }
    }
}
