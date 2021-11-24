using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Souqly_API.Helpers
{
    public static class Extensions
    {
        // send proparties from PaginationHeader To Http Response Header
       public static void AddPagination(this HttpResponse response,int currentPage,int itemsPerPage,int totalItems,int totalPages)
       {
           var paginationHeader = new PaginationHeader(currentPage,itemsPerPage,totalItems,totalPages);
           var camelCaseFormatter= new JsonSerializerSettings();
           camelCaseFormatter.ContractResolver = new CamelCasePropertyNamesContractResolver();
           //Serialize: .NET Formatter "to Enable to Convert JSON to obj or anything to anything
           // in this case i want to convert from Capital case To Camel Case (in order to angular understanding) 
           // go to Headers in postman you found this wor  "Pagination" is inserted and send her the parameters
           response.Headers.Add("Pagination",JsonConvert.SerializeObject(paginationHeader,camelCaseFormatter));
           response.Headers.Add("Access-Control-Expose-Headers","Pagination");

       }
    }
}