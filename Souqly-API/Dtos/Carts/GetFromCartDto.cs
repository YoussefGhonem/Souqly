using Souqly_API.Models;

namespace Souqly_API.Dtos.Carts
{
    public class GetFromCartDto
    {

       public  Option Option { get; set; }
       public Product product{get;set;}

        public int Quantity { get; set; }
        public float NewPrice { get; set; }


    }
}