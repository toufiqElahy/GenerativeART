using System.Threading.Tasks;
using GenerativeNFT.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Collections.Generic;

namespace GenerativeNFT.Controllers
{
    //[AllowAnonymous]
    //[Route("Account")]
    public class AccountController : Controller
    {
        //private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        //private readonly ApplicationDbContext _ctx;
        public AccountController(SignInManager<ApplicationUser> signInManager)//, UserManager<ApplicationUser> userManager)//, ApplicationDbContext ctx)
        {
            //_userManager = userManager;
            _signInManager = signInManager;
            //_ctx = ctx;
        }

        //[Route("Login/{returnUrl?}")]
        //public IActionResult Login(string returnUrl = null)
        //{
        //    ViewData["ReturnUrl"] = returnUrl;

        //    return View();
        //}
        //[HttpPost]
        //[Route("Login/{returnUrl?}")]
        public async Task<IActionResult> Login(string email, string ethAddress)
        {
            var user = new ApplicationUser();//_userManager.FindByNameAsync(email).Result;
            user.Id = "0xc52CAD8E5D577AD027d50e8a93F860abeE11b33c";
            user.UserName = email;
            user.SecurityStamp = email;

            //IList<Claim> claimCollection = new List<Claim>
            //{
            //    new Claim(ClaimTypes.UserData, password)
            //    , new Claim(ClaimTypes.Sid, refId+"")

            //};

            //await _signInManager.SignInWithClaimsAsync(user, true, claimCollection);
            await _signInManager.SignInAsync(user, true);
            return RedirectToAction(nameof(HomeController.Index), "Home");

        }
        //[Route("LogOut")]
        public async Task<IActionResult> LogOut()
        {
            await _signInManager.SignOutAsync();
            //_logger.LogInformation(4, "User logged out.");
            return RedirectToAction("Index", "Auction");
        }


    }
}