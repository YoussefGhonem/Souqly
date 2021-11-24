using System;
using System.Threading.Tasks;
using E_Commerce.API.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Souqly_API.Models;

namespace Souqly_API.Services
{
    public class DataContext : IdentityDbContext<User, Role, int>
    {
        //
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }



        public DbSet<Product> Products { get; set; }

        public DbSet<Option> Option { get; set; }
        public DbSet<Image> Images4 { get; set; }
      //  public DbSet<MarketingProduct> MarketingProducts { get; set; }
        public DbSet<Bill> Bills { get; set; }
        public DbSet<Cart> Carts { get; set; }

        // internal Task SaveChangesAsync()
        // {
        //     throw new NotImplementedException();
        // }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetails> OrderDetails { get; set; }
        public DbSet<ProductImage> ProductImages { get; set; }
        public DbSet<Shipping> Shippings { get; set; }
        public DbSet<WithdrawRequest> WithdrawRequests { get; set; }

       
        public DbSet<ProductOptionCart> ProductOptionCart { get; set; }

        public DbSet<UserBill> UserBills { get; set; }
        public DbSet<ShippingCompany> shippingCompanies { get; set; }


     //   public DbSet<Count> Counts { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
              base.OnModelCreating(builder);
              builder.Entity<Product>()
                .HasOne<User>(s => s.Supplier)
                .WithMany(ta => ta.Products)
                .HasForeignKey(u => u.SupplierId)
                .OnDelete(DeleteBehavior.Restrict);

            //  base.OnModelCreating(builder);
            // builder.Entity<Order>()
            //   .HasOne<User>(s => s.Marketing)
            //   .WithMany(ta => ta.Orders)
            //   .HasForeignKey(u => u.MarketingId)
            //   .OnDelete(DeleteBehavior.Restrict);



            //builder.Entity<ShippingCompany>().HasData(
            //    new ShippingCompany { Id=1 , companyName = "Not Attached" });


        }

    }
}