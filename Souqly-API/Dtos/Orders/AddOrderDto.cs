using System;

namespace Souqly_API.Dtos.Orders
{
    public class AddOrderDto
    {
        // Bill
        public float DealPrice { get; set; }
        public float SiteProfits { get; set; }
        public float ShippingProfits { get; set; }
       // public float TotalPriceForClient { get; set; }
        // Marketing Product
        public float MarketingProfits { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime ShippedDate { get; set; }

        public int ShippingId { get; set; }
  
        // Client Info
        public string ClientName { get; set; }
        public int Phone { get; set; }
        public string Address { get; set; }

      //  public int Quantity { get; set; }
      
     //   public float TotalOptionPrice { get; set; }
        
        public AddOrderDto()
        {
            DateTime endDate=DateTime.Now;

            this.OrderDate=DateTime.Now;

         //  this.ShippedDate=endDate.AddDays(Duration);

           // this.Status="Pending";

        }


    }
}