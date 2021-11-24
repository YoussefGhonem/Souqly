using Souqly_API.Dtos;
using Souqly_API.Dtos.Shipping;
using Souqly_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Souqly_API.Services
{
    public interface IShippingRepo
    {

         Task<List<Order>> getAllBindingOrders();
         Task<List<ShippingCompanyDto>> getAllShippingCompanies();
         Task OrderInShipping(int id,string ploicy,int company);
         Task<List<ShippingOrderDetailDto>> getAllShippingOrderDetails(int id);

    }//end of interface IShippingRepo
}//end of namespace
