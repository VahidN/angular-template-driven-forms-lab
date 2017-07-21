using AngularTemplateDrivenFormsLab.Utils;

namespace AngularTemplateDrivenFormsLab.Models
{
    public class ProductQueryViewModel : IPagedQueryModel
    {
        // ... other properties ...

        public string SortBy { get; set; }
        public bool IsAscending { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
    }
}
