using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Souqly_API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Souqly_API.Dtos.Shipping;

namespace Souqly_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShippingController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly ISouqlyRepo _souqlyService;
        private readonly IShippingRepo _shippingService;

        public ShippingController(IMapper mapper, ISouqlyRepo souqlyService, IShippingRepo shippingRepo)
        {
            _mapper = mapper;
            _souqlyService = souqlyService;
            _shippingService = shippingRepo;

        }//end of constructor

        [HttpGet("GetBindingOrders")]
        public async Task<IActionResult> GetBindingOrders()
        {
            var BindingOrders = await _shippingService.getAllBindingOrders();

            var BindingOrdersForShipping = _mapper.Map<IEnumerable<OrderShippingDto>>(BindingOrders);

            return Ok(BindingOrdersForShipping);

        }//end of updateShippingPolicy

        [HttpGet("GetAllShippingCompanies")]
        public async Task<IActionResult> GetAllShippingCompanies() {

            var companies = await _shippingService.getAllShippingCompanies();
            if (companies != null)
            {
                return Ok(companies);

            }
            return Ok("لا توجد شركات شحن");
        }//end of GetAllShippingCompanies

        [HttpPost("MakeOrderInShipping/{orderNumber}/{one}/{two}")]
        public async Task<IActionResult> MakeOrderInShipping(int orderNumber,string one , int two) {

            await _shippingService.OrderInShipping(orderNumber,one,two);

            return Ok();

        }//end of MakeOrderInShipping

        [HttpGet("GetShippingOrderDetails/{id}")]
        public async Task<IActionResult> GetShippingOrderDetails(int id)
        {
            var Details = await _shippingService.getAllShippingOrderDetails(id);

            return Ok(Details);

        }//end of GetShippingOrderDetails


    }//end of Controller class ShippingController
}//end of namespace
