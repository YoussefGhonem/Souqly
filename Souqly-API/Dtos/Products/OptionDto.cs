using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Souqly_API.Dtos.Products
{
    public class OptionDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int StockIn { get; set; }
        public float ItemPrice { get; set; }
    }
}
