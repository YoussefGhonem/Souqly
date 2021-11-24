using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using E_Commerce.API.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Souqly_API.Helpers;
using Souqly_API.Models;
using Souqly_API.Services;

namespace Souqly_API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers(options =>
            { // Authorization For All project
                var policy = new AuthorizationPolicyBuilder()
                            .RequireAuthenticatedUser()
                            .Build();
                options.Filters.Add(new AuthorizeFilter(policy));
            }); // Routing instead of AddMvc()

            services.Configure<CloudSettings>(Configuration.GetSection("CloudSettings"));

            // ASP Identity For JWT Token
            IdentityBuilder builder = services.AddIdentityCore<User>(
                Option =>
                {
                    Option.Password.RequireDigit = false;
                    Option.Password.RequiredLength = 4;
                    Option.Password.RequireLowercase = false;
                    Option.Password.RequireUppercase = false;
                    Option.Password.RequiredUniqueChars = 0;
                    Option.Password.RequireNonAlphanumeric = false;
                });
                
            builder = new IdentityBuilder(builder.UserType, typeof(Role), builder.Services);
            builder.AddEntityFrameworkStores<DataContext>();
            builder.AddRoleValidator<RoleValidator<Role>>();
            builder.AddRoleManager<RoleManager<Role>>();
            builder.AddSignInManager<SignInManager<User>>();

            // Authorization For JWT Middelware
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(Options =>
            {
                Options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration.
                    GetSection("AppSettings:Token").Value)),
                    ValidateIssuer = false,
                    ValidateAudience = false

                };
            });



            services.AddDbContext<DataContext>(x => x.UseSqlServer(Configuration.GetConnectionString("MyConnection")));
            services.AddControllersWithViews().AddNewtonsoftJson(options =>options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
            services.AddScoped<IAuthRepo,AuthRepo>();
            services.AddScoped<ISouqlyRepo,SouqlyRepo>();
            services.AddScoped<ISupplierRepo, SupplierRepo>();
            services.AddScoped<IProductRepo, ProductRepo>();
            services.AddScoped<IAdminRepo, AdminRepo>();
            services.AddScoped<IShippingRepo, ShippingRepo>();

            // CORS Policy
            services.AddCors();

             services.AddSignalR();


             services.AddAutoMapper(typeof(Startup));
                 // Mapper.Reset();
              services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Souqly_API", Version = "v1" });
            });

            // Mapper.Reset();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Souqly_API v1"));
            }

    //        app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(x => x.WithOrigins("http://localhost:4200")
            .AllowAnyHeader().AllowAnyMethod().AllowCredentials());

            app.UseAuthentication();
            app.UseAuthorization();
          
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<CartHub>("/cart");
            });

        }
    }
}
