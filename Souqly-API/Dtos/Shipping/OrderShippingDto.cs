using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Souqly_API.Dtos.Shipping
{
    public class OrderShippingDto
    {
        
        public int Id { get; set; }
        public string shippingPolicy { get; set; }
        public int shippingCompaniesId { get; set; }
        public string ClientName { get; set; }
        public int Phone { get; set; }
        public string Address { get; set; }

        
        public int BillId { get; set; }



    }//end of OrderShippingDto
}//end of namespace
