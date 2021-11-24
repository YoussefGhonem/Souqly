
using System.ComponentModel.DataAnnotations;



namespace Souqly_API.Dtos.User
    {
        public class UserVisa
        {
            
            public  int Id { get; set; }  // will be hidden in angular 
           
            public string PhoneNumber { get; set; }
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
        }
    }


