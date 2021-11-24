using System;
using System.Threading.Tasks;

namespace Souqly_API.Services
{
    public interface IAuthRepo
    {
         Task<bool> EmailExists(string email);

         Task<bool> UserNameExists(string userName);

    }
}