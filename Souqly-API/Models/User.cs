using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using Microsoft.AspNetCore.Identity;

namespace Souqly_API.Models
{
    public class User : IdentityUser<int>
    {
        // Marketing Info

        // Shipping Info

        // Supplier Info
        public string FirstName { get; set; }

       //public string ImageID { get; set; } // صوره الرقم القومي
        //********** Visa Info**********
        //Bank Data
        public string ClientName { get; set; }
        public string BankName { get; set; }
        public int AccountNumber { get; set; }
        public string Section { get; set; }
        // mail Data
        public int CardNumber { get; set; }
        public string CardName { get; set; }
        // wallet Data
        public int WalletNumber { get; set; }


        public string lastName { get; set; }
        public string address { get; set; }
        public string ImageID { get; set; } // صوره الرقم القومي
        // Shahy Asks ?????
        // P.P 
        // Last Name 
        // Why Total profits here 
        public int TotalProfits { get; set; } = 0;
        public int WithdrawnProfits { get; set; } = 0;

       
       public virtual ICollection<Product> Products { get; set; }
         public virtual ICollection<Order> Orders { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
        public ICollection<WithdrawRequest> WithdrawRequests { get; set; }
        //   public ICollection<Order> Orders { get; set; }
        // Many To Many
        //  public virtual ICollection<MarketingProduct> MarketingProducts { get; set; }
        public virtual ICollection<UserBill> UserBills { get; set; }
    }
}
