using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Souqly_API.Models
{
    public class Option
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public int StockIn { get; set; }
     //   public string Name { get; set; }

        public float ItemPrice { get; set; }
        public string AvailableOptions { get; set; } 
        public Product Product { get; set; }

        [ForeignKey("Product")]
        public int ProductId { get; set; }

        public List<ProductOptionCart> ProductOptionCart { get; set; }
    }
}