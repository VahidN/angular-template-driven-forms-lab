using System.Collections.Generic;
using System.Text.Json.Serialization;

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
