using System.Net.Mime;
using System;
using System.Collections.Generic;

namespace Souqly_API.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public float Weight { get; set; }
        public string Description { get; set; }
        public string Brand { get; set; }
        public DateTime Date { get; set; }
        public string Dimension { get; set; }

        public int? QuantitySold { get; set; } = 0;

        public User Supplier { get; set; }
        public Category Category { get; set; }
        public int CategoryId { get; set; }
        public int SupplierId { get; set; }

        public ICollection<Option> Options { get; set; }
        public ICollection<Image> Images { get; set; }

        // Many To Many Realation
     //   public List<ProductOptionCart> ProductCarts { get; set; }
     //   public virtual ICollection<MarketingProduct> MarketingProducts { get; set; }


    }
}