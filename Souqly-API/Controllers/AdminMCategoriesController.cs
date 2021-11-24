using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Souqly_API.Dtos.Marketeer;
using Souqly_API.Services;
using System.Threading.Tasks;
using System.Collections.Generic;
using Souqly_API.Models;

namespace Souqly_API.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class AdminMCategoriesController : ControllerBase
    {
       
        private IMapper _mapper;
        private ISouqlyRepo _repo;

        public AdminMCategoriesController (ISouqlyRepo repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

      [HttpGet]  
      public async Task <IActionResult> GetCategories()
      {
            var allcategories = await _repo.GetallCategories();
            var categoriesReturn = _mapper.Map<IEnumerable<ManageCategoriesDto>>(allcategories);  //get -- mapping
            return Ok(categoriesReturn);
      }

       [HttpPost]  
      public async Task<IActionResult> CreateCategory(ManageCategoriesDto newcat)
      {
        var catToCreate = _mapper.Map<Category>(newcat);
       var catToretun = _repo.Add(catToCreate);
       await _repo.SaveAll();
        return Ok();
      }

       [HttpGet("{id}")]  
      public async Task <IActionResult> GetById(int id)
      {
            var SelectedCat =  _repo.GetCatById(id);
            var categoriesReturn = _mapper.Map<ManageCategoriesDto>(SelectedCat);  //get -- mapping
            return Ok(categoriesReturn);
      }

      [HttpPut("{Id}/{updatedCatName}")]
      public async Task<IActionResult> UpdateCategoryName(int Id,string updatedCatName)
      { 
          await _repo.UpdateCategory(Id,updatedCatName);
          return Ok(); 
      }
    } // end controller
 
} // end namespace