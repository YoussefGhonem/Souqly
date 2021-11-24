namespace Souqly_API.Models
{
    public class MarketingProduct
    {
        public int Id { get; set; }
       public User Marketing { get; set; }
       public Product Product { get; set; }
        public int MarketingId { get; set; }
        public int ProductId { get; set; }
        public float Profits { get; set; }
        public bool Confirmed { get; set; }
    }
}