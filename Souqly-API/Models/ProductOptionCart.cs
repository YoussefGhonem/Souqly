namespace Souqly_API.Models
{
    public class ProductOptionCart
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public float NewPrice { get; set; }

        public Option Option { get; set; }
        public int OptionId { get; set; }

        public Cart Cart { get; set; }
        public int CartId { get; set; }
    }
}