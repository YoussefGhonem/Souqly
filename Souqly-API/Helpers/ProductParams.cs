namespace Souqly_API.Helpers
{
    public class ProductParams
    {
        // علشان احدد اقصى عدد لظهور اليوزرز
        //  هو ده العدد اللي مش هيتخطاه
        // لان ممكن اعمل ان اليوزر هو اللي يتحكم في عدد المنتجات اللي هتظر بس هعمل اقصى حاجه خمسين 
        private const int MaxPageSize = 50;
        public int PageNumber { get; set; } = 1; //  تكون الصفحه البدائيه هي رقم 1
        private int pageSize = 8;
        public int PageSize
        {
            // هنا يعني لو دخل رقم اكبر  من الخمسين فهيرجع خمسين ولو رقم اقل فهبعته عادي 
            get { return pageSize;}
            set { pageSize = (value>MaxPageSize)?MaxPageSize:value;// ternary operator
            }
        }
    }
}