using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Souqly_API.Dtos.User;
using Souqly_API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
 
namespace Souqly_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MAccountManageController : ControllerBase
    {
        private IMapper _mapper;
        private ISouqlyRepo _repo;
        private UserForManage userToReturn;
 
        public MAccountManageController(ISouqlyRepo repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
 
        [HttpGet]
        public async Task<IActionResult> GetData()  //action --->  repo. function
        {
            var CurrentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value); // get the current user id 
            var CurrentUser = await _repo.GetUser(CurrentUserId);  //Getuser in repo
            userToReturn = _mapper.Map<UserForManage>(CurrentUser);  //get -- mapping 
            return Ok(userToReturn);
        }
            
   
 
        [HttpPut]
        public async Task<IActionResult> UpdateAccountData(UserForManage model)
        { 
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value); // get the user id 
            var oldUser = await _repo.GetUser(currentUserId);
            var newUser = _mapper.Map(model, oldUser); // update
            await _repo.SaveAll();
            return Ok(model); 
        }
    
 }
 
}