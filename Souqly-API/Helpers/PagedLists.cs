using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Souqly_API.Helpers
{
    public class PagedLists<T>:List<T>
    {
      public int CurrentPage { get; set; }
        public int TotalPages { get; set; }
        public int PageSize { get; set; }
        public int TotalCount { get; set; } // Total Of Items in DB
           public PagedLists(List<T> Items,int totalCount,int currentPage,int pageSize)
        {
            TotalCount = totalCount;
            PageSize = pageSize;
            CurrentPage = currentPage;
            // Ceiling: Returns the smallest integral value greater than or equal to the specified number.
            // Ceiling: when result is 2.7 convert it 3 
            TotalPages=(int)Math.Ceiling(totalCount/(double)pageSize);
            this.AddRange(Items);// هنا انا ببعت المننجات 
        }
         public static async Task <PagedLists<T>> CreateAsync(IQueryable<T> source,int pageNumber , int pageSize){
            var count = await source.CountAsync();
            var items= await source.Skip((pageNumber-1)*pageSize).Take(pageSize).ToListAsync();// In this step occurred Differed Execution
            return new PagedLists<T>(items,count,pageNumber,pageSize);
        }

    }
}