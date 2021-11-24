using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Souqly_API.Models
{
    public class ShippingCompany
    {
        public int Id { get; set; }
        public string companyName { get; set; }
        public string? companyPhone { get; set; }
        

        public List<Order> orders { get; set; }
    
    }//end of class
}//end of namespace
