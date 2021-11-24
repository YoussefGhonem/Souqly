using System.Collections;
using System.Collections.Generic;

namespace Souqly_API.Models
{
    public class Cart
    {
        public int Id { get; set; }

        //   public ICollection<Product> Products { get; set; }
        public User Marketing { get; set; }
        public int MarketingId { get; set; }

        // Many To Many Realation
        public List<ProductOptionCart> ProductOptionCart { get; set; }



    }
}