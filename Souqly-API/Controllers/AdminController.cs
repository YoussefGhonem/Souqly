using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.Configuration;
using E_Commerce.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Souqly_API.Dtos.User;
using Souqly_API.Models;
using Souqly_API.Services;

namespace Souqly_API.Controllers
{
    [Route("[Controller]/[Action]")]
    [ApiController]
    [Authorize(Roles ="Admin")]
    public class AdminController: ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;
        private readonly IAuthRepo _Authrepo;
        private readonly ISouqlyRepo _repo;

        public AdminController(UserManager<User> userManager, RoleManager<Role> roleManager,
        SignInManager<User> signInManager, IConfiguration config,
        IMapper mapper, IAuthRepo Authrepo,ISouqlyRepo repo)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
            _config = config;
            _mapper = mapper;
            _Authrepo = Authrepo;
            _repo = repo;

        }

        [HttpPost]
        public async Task<IActionResult> Register(UserForRegister model)
        {

            if (model == null) { return NotFound(); }

            if (ModelState.IsValid)
            {
                if (await _Authrepo.EmailExists(model.Email))
                    return BadRequest("هذا البريد الاكتروني موجود بالفعل");
                if (await _Authrepo.UserNameExists(model.UserName))
                    return BadRequest("هذا الاسم موجود بالفعل");
            }

            var userToCreate = _mapper.Map<User>(model);
            var result = await _userManager.CreateAsync(userToCreate, model.Password);
            var result2 = await _userManager.AddToRoleAsync(userToCreate, model.RoleName);
            var userToReturn = _mapper.Map<UserForDetails>(userToCreate);

            if (result.Succeeded)
            {
                //  await _signInManager.SignInAsync(userToCreate, isPersistent:false);
                return CreatedAtRoute("GetUser", new { controller = "Users", id = userToCreate.Id }, userToReturn);
            }
            return BadRequest(result.Errors);
        }









    }
}