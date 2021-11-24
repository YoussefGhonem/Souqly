using Souqly_API.Dtos.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Souqly_API.Services
{
    public interface IAdminRepo
    {
        Task<IEnumerable<UserForWithdrawRequest>> GetWithdrawnRequests();
        Task<int> ConfirmWithdrawnRequests(int id);
        Task<int> CancelConfirmWithdrawnRequest(int id);
        Task<int> RejectWithdrawnRequest(int id);
    }
}
