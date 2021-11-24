using E_Commerce.API.Models;
using Microsoft.AspNetCore.Identity;

namespace Souqly_API.Models
{
    public class UserRole : IdentityUserRole<int>
    {
        public User User { get; set; }
        public Role Role { get; set; }

    }
}