using System.Collections.Generic;

namespace AngularTemplateDrivenFormsLab.Models
{
    /// <summary>
    /// منبع داده فرضی جهت سهولت دموی برنامه
    /// </summary>
    public static class CategoriesDataSource
    {
        private static readonly IList<Category> _cachedItems;
        static CategoriesDataSource()
        {
            _cachedItems = createCategoriesDataSource();
        }

        public static IList<Category> Items
        {
            get { return _cachedItems; }
        }

        /// <summary>
        /// هدف صرفا تهیه یک منبع داده آزمایشی ساده تشکیل شده در حافظه است
        /// </summary>
        private static IList<Category> createCategoriesDataSource()
        {
            return new List<Category>
            {
                new Category
                {
                    CategoryId = 1,
                    CategoryName = "گروه 1",
                    Products = new List<Product>
                    {
                        new Product
                        {
                            ProductId = 1,
                            ProductName = "محصول 1"
                        },
                        new Product
                        {
                            ProductId = 2,
                            ProductName = "محصول 2"
                        }
                    }
                },
                new Category
                {
                    CategoryId = 2,
                    CategoryName = "گروه 2",
                    Products = new List<Product>
                    {
                        new Product
                        {
                            ProductId = 3,
                            ProductName = "محصول 3"
                        },
                        new Product
                        {
                            ProductId = 4,
                            ProductName = "محصول 4"
                        }
                    }
                }
            };
        }
    }
}
