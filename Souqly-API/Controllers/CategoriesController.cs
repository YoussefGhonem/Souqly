using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Souqly_API.Dtos.Supplier.SupplierUploadProducts;
using Souqly_API.Models;
using Souqly_API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Souqly_API.Controllers
{
    [Route("api")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ISouqlyRepo _service;
        private readonly IMapper _mapper;

        public CategoriesController(ISouqlyRepo service, IMapper mapper, ISouqlyRepo IsouqlyRepo)
        {
            _service = service;
            _mapper = mapper;
        }//end of constructor


        
          [HttpGet("getallcategories")]
         public async Task<IActionResult> GetAllCategories()
         {
            var categoriess = await _service.GetAllCategories();
            return Ok(categoriess);
        }//end of GetAllCategories


    }//end of class

}//end of namespace