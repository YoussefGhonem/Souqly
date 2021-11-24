using Microsoft.AspNetCore.Http;

namespace Souqly_API.Dtos.Supplier.SupplierUploadProducts
{
    public class ImageForCreateDto
    {
        public string URL { get; set; }
        public IFormFile File { get; set; }
        public string publicId { get; set; }
        
    }//end of class
}//end of namespace