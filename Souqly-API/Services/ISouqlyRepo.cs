using System.Collections.Generic;
using System.Threading.Tasks;
using Souqly_API.Dtos.User;
using Souqly_API.Models;

namespace Souqly_API.Services
{

    public interface ISouqlyRepo
    {

       Task Add <T> (T entity) where T:class;// Add Any entity
       Task Delete <T> (T entity) where T:class;
       void Update <T> (T entity) where T:class;
       Task <bool> SaveAll();

       //Cart
         Task <User> GetUser(int id);
         Task<bool> IsMarketHaveCart(int id);
         Task<int> GetCartID(int id);
         Task<bool> IsOptionExist(int id);
         Task <ProductOptionCart> GetOption(int optionId , int cartId);
      
        Task<int> GetStock(int optionId);
        Task<List<ProductOptionCart>> GetCart(int id);
        Task<float> GetProductPrice(int cartID);
        Task<float> GetShippingPrice(int shippingId);
        Task<List<int>>  GetOptionsIds(int CartId);
        Task <ProductOptionCart> GetProductOption(int optionId , int cartId);
        Task<List<Category>> GetAllCategories();
        
        //category
        //  Category[] GetCategories();

        Task<float> GetOptionPrice(int optionId);

        ///////////////////
        Task<IEnumerable<Shipping>> GetAllshipping();
       
        Task<Shipping> GetShipping(int id);

        Task <Order> GetOrderInfoById(int id,int marketingId);
        Task <IEnumerable<Order>> GetAllOrders(int id);
        //*********************************
        //Admin
         Task<IEnumerable<User>> GetAllUsers();

        Task<UserProfitsDto> GetUserProfits(int user_id);
        Task<int> AddWithdrawnRequest(int user_id, int money);

        Task<bool> DeleteAllSelected(ICollection<string> ids);

        //Get Orders
        Task<IEnumerable<OrderDetails>> GetMarketeerOrders(int id);

        //Admin
         Task<IEnumerable<Category>> GetallCategories();

         Task<Category> UpdateCategory(int id, string name);

         Category GetCatById(int id);
        Task <Count> GetCounts();

        //shipping

          Task<IEnumerable<Order>>  GetOrdersForShipping();

           Task<Order> getOrder(int OrderId);

           Task<IEnumerable<UserBill>> getBillActive(int OrderId);

        Task<User> getUserprofits(int UserId);

         Task<IEnumerable<OrderDetails>> GetOrderDetailsOption(int orderId);
         Task<Option>  GetOptionToUPdateQauntaty(int OptionID);
    }
}
