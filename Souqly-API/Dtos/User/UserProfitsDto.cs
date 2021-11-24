using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Souqly_API.Dtos.User
{
    public class UserProfitsDto
    {
        public int TotalProfits { get; set; }
        public int AvailableProfits { get; set; }
        public int ExpectedProfits { get; set; }
        public bool HasPaymentMethod { get; set; }
        public bool IsRequestAvailable { get; set; } //can the client send another withdraw request at the current time or not
        public int RecentTransferred { get; set; } //the money that have been transferred at the last 48 hours
    }
}
