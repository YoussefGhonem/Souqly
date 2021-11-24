using Microsoft.AspNetCore.SignalR;

namespace Souqly_API.Models
{
    public class CartHub : Hub
    {

          public async void refresh(){
            await Clients.All.SendAsync("refresh");
        }

    }
}