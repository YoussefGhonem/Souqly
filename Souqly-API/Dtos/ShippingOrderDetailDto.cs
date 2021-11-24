using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Souqly_API.Dtos
{
    public class ShippingOrderDetailDto
    {
        public string SuplierName { get; set; }
        public string ProductName { get; set; }
        public string AvailableOptions { get; set; }
        public int Quantity { get; set; }

    }//end of class ShippingOrderDetailDto
}//end of namespace
