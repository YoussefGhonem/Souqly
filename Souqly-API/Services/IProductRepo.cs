using Souqly_API.Dtos.Products;
using Souqly_API.Helpers;
using Souqly_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Souqly_API.Services
{
    public interface IProductRepo
    {
       // Task<List<ProductDto>> GetProducts();

       // Task<PagedLists<ProductDto>> GetProducts(ProductParams productParams);
        //Task<Product> GetProductById(int id);
        Task<List<ProductDto>> GetProducts();
        Task DeleteProduct(int id);

     Task<List<ProductDto>> GetSupplierProducts(int id);
Task<List<ProductDto>> GetCatogoreyProducts(int CatgoreyId);
     Task EditProductOption(OptionDto optionEdited);

      Task<List<ProductDto>> GetTopProducts(int top);
    Task<List<ProductDto>> GetTopProductsByCatogorey(int CatgoreyId,int topnum);
     Task UpdateSoldQuantity(int id, int quantity);
       
       Task<List<ProductDto>> GetSupplierProductsEx(int id);

    }
}
