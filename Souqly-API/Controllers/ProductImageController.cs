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
    [Route("api/[controller]")]
    //[Route("api")]
    [ApiController]
    public class ProductImageController : ControllerBase
    {
        private readonly ISupplierRepo _service;
        private readonly IMapper _mapper;
        private readonly ISouqlyRepo _isouqlyRepo;

        public ProductImageController(ISupplierRepo service, IMapper mapper, ISouqlyRepo IsouqlyRepo)
        {
            _service = service;
            _mapper = mapper;
            _isouqlyRepo = IsouqlyRepo;
        }

       [HttpPost("{productId}")]
        public async Task<IActionResult> AddImageForProduct( /*int supplierId*/ int productId, [FromForm] ImageForCreateDto imageForCreateDto)
        {

            //--> 1)  check authintication by supplierId from the token

            //--> 2)  _service add product with it's option habasy 7aga mn no3 el dto

            //--> 3)  add product image
            return Ok(await _service.AddImageForProduct(productId, imageForCreateDto));

        }//end of AddImageForProduct


        [HttpPost("addproduct/{supplierId}")]
        public async Task<IActionResult> AddProduct(int supplierId , ProductForUploadDto productForUploadDto)
        {

            //--> 1)  check authintication by supplierId from the token
            if (supplierId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            //--> 2)  _service add product with it's option habasy 7aga mn no3 el dto
            Product product = _mapper.Map<Product>(productForUploadDto);
            _isouqlyRepo.Add(product);
            await _isouqlyRepo.SaveAll();

            Option option = _mapper.Map<Option>(productForUploadDto);
            option.ProductId = product.Id;
            _isouqlyRepo.Add(option);
            await _isouqlyRepo.SaveAll();

            //--> 3)  return product id to add images after that
            return Ok(product.Id);

        }



    }//end of class
}//end of namespace
