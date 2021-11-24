using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Souqly_API.Dtos.Supplier;
using Souqly_API.Dtos.Supplier.SupplierUploadProducts;
using Souqly_API.Helpers;
using Souqly_API.Models;

namespace Souqly_API.Services
{
    public class SupplierRepo : ISupplierRepo
    {

        private readonly DataContext _dbcontext;

        //to get data from CloudinarySettings class
        private readonly IOptions<CloudSettings> _cloudinaryConfig;

        //to map from dots
        private readonly IMapper _mapper;


        //main class
        private Cloudinary _cloudinary;

        public SupplierRepo(DataContext dbcontext, IOptions<CloudSettings> cloudinaryConfig, IMapper Mapper)
        {
            _dbcontext = dbcontext;
            _cloudinaryConfig = cloudinaryConfig;

            Account Acount = new Account(
               _cloudinaryConfig.Value.CloudName,
               _cloudinaryConfig.Value.APIKey,
               _cloudinaryConfig.Value.APISecret
               );

            _cloudinary = new Cloudinary(Acount);
            _mapper = Mapper;

        }

        // public async Task<List<OrderDetail>> GetOrders(long supplierId)
        // {
        //     var orders = await _context.OrderDetails.Where(o => o.Product.UserId == supplierId).Include(s => s.Order).Include(s => s.Product).ToListAsync();
        //     return orders;
        // }



        public async Task<ImageForReturnDto> GetImage(int id)
        {

            //hna hn4ta8l mn el IRepo badal daaaaa
            var imageFromDataBase = await _dbcontext.Images4.FirstOrDefaultAsync(m => m.Id == id);
            // da haytktb f el function elly hayt3mlha implementation f el class

            var image = _mapper.Map<ImageForReturnDto>(imageFromDataBase);

            return image;


        }//end of GetImage



        public async Task<ImageForReturnDto> AddImageForProduct(int productId, ImageForCreateDto imageForCreateDto)
        {


            //1.. First Must check the authorized

            //var product = await _dbcontext.Products.FindAsync(productId);

            var file = imageForCreateDto.File;

            //to recive the result after uploading to check the values
            //the length of file
            var uploadResult = new ImageUploadResult();

            if (file != null && file.Length > 0)
            {
                //to check the file and make some function on it like determine its size, length, width ..etc
                using (var stream = file.OpenReadStream())//OpenReadStream to read any file and it in stream variable
                {
                    //start determine the features by using Uploadparams that is from imageUploadParams that into cloudinary
                    var uploadParams = new ImageUploadParams()
                    {
                        //this is the file and it's name and  i want to upload 
                        //File ==> a property into ImageUploadParams that express a File
                        File = new FileDescription(file.Name, stream),

                        //to select some featuers on file this function available on cloudinary
                        Transformation = new Transformation()
                                              .Width(500)
                                              .Height(500)
                                              .Crop("fill")
                        //.Gravity(Gravity.Face)  To crop image and concentrate on a part i selected
                    };//end of ImageUploadParams

                    uploadResult = _cloudinary.Upload(uploadParams);

                }//end of using that used to call despose function like destructor to end the object lifetime
            }//end of if

            imageForCreateDto.URL = uploadResult.Uri.ToString();
            imageForCreateDto.publicId = uploadResult.PublicId;

            var image = _mapper.Map<Image>(imageForCreateDto);

            //if (!product.Images.Any(p => p.IsMain))
            //{
            //    image.IsMain = true;
            //}


            _dbcontext.Images4.Add(new Image { Url = image.Url, publicId = image.publicId, ProductId = productId });

            _dbcontext.SaveChanges();

            var imageForReturn = _mapper.Map<ImageForReturnDto>(image);

            //return CreatedAtRoute("GetImage", new { id = image.Id }, imageForReturn);
            return imageForReturn;

            // return BadRequest("Error");

        }//end of AddImageForProduct


        //to call addProductMainData and then add it's option and return th product id
        public async Task<int> AddProduct(ProductForUploadDto productForUploadDto)
        {

            Product product = _mapper.Map<Product>(productForUploadDto);

            int productId = int.Parse(AddProductMainData(product).ToString());

            var productOption = _mapper.Map<Option>(productForUploadDto);

            productOption.ProductId = productId;
            await _dbcontext.Option.AddAsync(productOption);
            await _dbcontext.SaveChangesAsync();

            return productId;
            //return 0;
        }//end of AddProduct


        //to add product main data and return product id
        public async Task<int> AddProductMainData(Product ProductData)
        {
            await _dbcontext.Products.AddAsync(ProductData);
            await _dbcontext.SaveChangesAsync();
            var productId = ProductData.Id;

            return productId;

        }//end of AddProductMainData

        public async Task<List<SupplierOrderDto>> GetOrders(long supplierId)
        {
            List<OrderDetails> unseenOrders = (from o in _dbcontext.OrderDetails.Include(o => o.Option).ThenInclude(o => o.Product)
                                              where o.Seen_Supplier == false && o.Option.Product.SupplierId == supplierId
                                              select o).ToList();

            foreach (var item in unseenOrders)
            {
                item.Seen_Supplier = true;
            }

            _dbcontext.SaveChanges();
            var orders = await _dbcontext.OrderDetails.Include(i => i.Order).
                                           Include(i => i.Option).ThenInclude( o => o.Product).Select(o => new SupplierOrderDto()
                                           {
                                               OrderId = o.OrderId,
                                               OrderDate = o.Order.OrderDate,
                                               ProductId = o.Option.ProductId,
                                               ProductName = o.Option.Product.ProductName,
                                               Quantity = o.Quantity,
                                               Status = o.Order.Status,
                                               TotalOptionPrice = o.TotalOptionPrice
                                           }).ToListAsync();

            return orders;
        }

        public int GetCountOfOrders(long supplierId)
        {
            var result = _dbcontext.OrderDetails.Include(o => o.Option).ThenInclude(o => o.Product).Where(
                    x => x.Option.Product.SupplierId == supplierId && x.Seen_Supplier == false
                ).Count();

            return result;
        }

      

    }
}
