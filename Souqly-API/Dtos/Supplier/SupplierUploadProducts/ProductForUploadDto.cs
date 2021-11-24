using System;

namespace Souqly_API.Dtos.Supplier.SupplierUploadProducts
{
    public class ProductForUploadDto
    {
        //product Data

        public string ProductName { get; set; }
        public float Weight { get; set; }
        public string Description { get; set; }
        public string Brand { get; set; }

       
        public string Dimension { get; set; }
        public int CategoryId { get; set; }


        //options Data

        // public string Code { get; set; }
        // public string StockIn { get; set; }
        // public float ItemPrice { get; set; }
        // public string AvailableOptions { get; set; }

        //public int ProductId { get; set; }

    }//end of class
}//end of namespace