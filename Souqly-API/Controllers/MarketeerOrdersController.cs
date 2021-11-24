using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Souqly_API.Dtos.Marketeer;
using Souqly_API.Dtos.User;
using Souqly_API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
 
namespace Souqly_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MarketeerOrdersController : ControllerBase
    {
       
        private IMapper _mapper;
        private ISouqlyRepo _repo;

        public MarketeerOrdersController(ISouqlyRepo repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

      [HttpGet]  // Marketing id
      public async Task <IActionResult> GetOrders()
      {

            var marketingId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);   //current User Id 
            var orders = await _repo.GetMarketeerOrders(marketingId);
             
            var ordersToReturn= _mapper.Map<IEnumerable<MarketeerOrdersDto>>(orders);
            return Ok(ordersToReturn);
      }
    }
 
}