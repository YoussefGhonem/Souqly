using System;

namespace Souqly_API.Dtos.Orders
{
    public class OrderListDto
    {
      // Order
          public DateTime OrderDate { get; set; }
        public DateTime ShippedDate { get; set; }
        public string Status { get; set; }
        // Bill
         public float MarktingProfits { get; set; }
    }
}