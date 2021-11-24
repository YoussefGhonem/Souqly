using AutoMapper;
using Souqly_API.Dtos.Carts;
using Souqly_API.Dtos.Orders;
using Souqly_API.Dtos.Shipping;
using Souqly_API.Dtos.User;
using Souqly_API.Dtos.Supplier;
using Souqly_API.Dtos.Products;
using Souqly_API.Models;
using Souqly_API.Dtos.Supplier.SupplierUploadProducts;
using Souqly_API.Dtos.Marketeer;

namespace Souqly_API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {

            CreateMap<UserForRegister, User>();// Create

            CreateMap<UserVisa, User>();// Create
            CreateMap<User, UserForDetails>();// Get Data
            CreateMap<AddToCartDto, ProductOptionCart>();// Create
            CreateMap<UpdateCartDto, ProductOptionCart>();// Create

            CreateMap<ProductOptionCart, GetFromCartDto>();// Get Data

            CreateMap<User, UserForManage>();// Get Data
            CreateMap<UserForManage, User>();// Create
            CreateMap<User, UserVisa>();// Get Data
            CreateMap<AddOrderDto, Order>();// Create
            CreateMap<AddOrderDto, Shipping>();// Create
            CreateMap<AddOrderDto, Bill>();// Create
            CreateMap<AddOrderDto, OrderDetails>();// Create

            CreateMap<Shipping, AllShippingDto>();// Get Data

            CreateMap<Order, OrderDetailsDto>()// Get Data
             .ForMember(dest => dest.City, opt => { opt.MapFrom(src => src.Shipping.City); })
             .ForMember(dest => dest.price, opt => { opt.MapFrom(src => src.Shipping.price); })
             .ForMember(dest => dest.Duration, opt => { opt.MapFrom(src => src.Shipping.Duration); })
             .ForMember(dest => dest.DealPrice, opt => { opt.MapFrom(src => src.Bill.DealPrice); })
             .ForMember(dest => dest.SiteProfits, opt => { opt.MapFrom(src => src.Bill.SiteProfits); })
             .ForMember(dest => dest.ShippingProfits, opt => { opt.MapFrom(src => src.Bill.ShippingProfits); })
             .ForMember(dest => dest.MarktingProfits, opt => { opt.MapFrom(src => src.Bill.MarktingProfits); });
            //.ForMember(dest=>dest.OrderDetails,opt=>{opt.MapFrom(src=>src.OrderDetails);});

            CreateMap<Order, OrderListDto>()// Get Data
             .ForMember(dest => dest.MarktingProfits, opt => { opt.MapFrom(src => src.Bill.MarktingProfits); });


            CreateMap<Order, SupplierOrderDto>(); //get
            CreateMap<OrderDetails, SupplierOrderDto>(); //get
            CreateMap<Product, SupplierOrderDto>();

            CreateMap<Image, ImageForReturnDto>();
            CreateMap<ImageForCreateDto, Image>();

            CreateMap<Product, ProductForUploadDto>();
            CreateMap<ProductForUploadDto, Product>();

            CreateMap<Option, ProductForUploadDto>();
            CreateMap<ProductForUploadDto, Option>();

            CreateMap<Option, ProductOptionDataDto>();
            CreateMap<ProductOptionDataDto, Option>();


            CreateMap<Product, ProductDataDto>();
            CreateMap<ProductDataDto, Product>();

            //CreateMap<Product, ProductDto>();
            //CreateMap<Option, ProductDto>();

            CreateMap<Product, ProductDto>();

            CreateMap<Order,ShippingOrdersStatusDto>();// Get Data


            //Follow marketeer orders
            CreateMap<OrderDetails, MarketeerOrdersDto>()// Get Data
               //order table
              .ForMember(dest => dest.OrderDate, opt => { opt.MapFrom(src => src.Order.OrderDate); })
              .ForMember(dest => dest.Status, opt => { opt.MapFrom(src => src.Order.Status); })
              .ForMember(dest => dest.Address, opt => { opt.MapFrom(src => src.Order.Address); })
              .ForMember(dest => dest.Phone, opt => { opt.MapFrom(src => src.Order.Phone); })
              .ForMember(dest => dest.ClientName, opt => { opt.MapFrom(src => src.Order.ClientName); })
              //option
              .ForMember(dest => dest.AvailableOptions, opt => { opt.MapFrom(src => src.Option.AvailableOptions); })
              //  product 
              .ForMember(dest => dest.ProductName, opt => { opt.MapFrom(src => src.Option.Product.ProductName); })
              //bills from order
              .ForMember(dest => dest.DealPrice, opt => { opt.MapFrom(src => src.Order.Bill.DealPrice); })
              .ForMember(dest => dest.MarktingProfits, opt => { opt.MapFrom(src => src.Order.Bill.MarktingProfits); });

            //Admin Manage categories
            CreateMap<Category, ManageCategoriesDto>();// Get Data
            CreateMap<ManageCategoriesDto,Category>();// Create


            CreateMap<Order, OrderShippingDto>();
            CreateMap<OrderShippingDto, Order>();

        }
    }
}