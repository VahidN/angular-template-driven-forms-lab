using System.Collections.Generic;

namespace AngularTemplateDrivenFormsLab.Models
{
    public class PagedQueryResult<T>
    {
        public int TotalItems { get; set; }
        public IEnumerable<T> Items { get; set; }
    }
}
