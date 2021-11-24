
using System;

namespace Souqly_API.Dtos.Marketeer
{
    public class MarketeerOrdersDto
    {

        //orderDetails
        public int Quantity { get; set; }

        public float TotalOptionPrice { get; set; }

        public int OrderId { get; set; }

        //order

        public DateTime OrderDate { get; set; }

        public string Status { get; set; }

        public string ClientName { get; set; }

        public int Phone { get; set; }

        public string Address { get; set; }

        //option
        public string AvailableOptions { get; set; }


        //product 

        public string ProductName { get; set; }

        //bills

        public float DealPrice { get; set; }

        public float MarktingProfits { get; set; }
    }
}
