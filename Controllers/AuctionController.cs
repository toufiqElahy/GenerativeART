using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using GenerativeNFT.Models;
using GenerativeNFT.services;
//using FormsAuthenticationExtensions;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;

namespace GenerativeNFT.Controllers
{
    public class AuctionController : Controller
    {
        public IActionResult Home()
        {
            return View();
        }
        [Authorize]
        public IActionResult CreateNft()
        {
            return View();
        }
        public IActionResult Index()
        {
            if (User.Identity.IsAuthenticated)
            {
                ViewBag.address = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier).Value;
            }
            return View();
        }
        public IActionResult ViewDetail(int auctionId)
        {
            if (User.Identity.IsAuthenticated)
            {
                ViewBag.address = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier).Value;
            }
            return View();
        }
        //[HttpPost]//optional
        //public async Task<IActionResult> CreateNft(IFormFile file1,Nft nft, IFormFile file2)
        //{
        //    var hash = await PinataService.GetHashAsync(new StreamContent(file1.OpenReadStream()), file1.FileName);
        //    nft.hash = hash;
        //    //var v= await PinataService.UnPinAsync(hash);
        //    var payload = new 
        //    {
        //        name=nft.name,
        //        description=nft.description,
        //        image="ipfs://"+hash+"/"+file1.FileName
        //    };
        //    nft.image = payload.image;
        //    var stringPayload = JsonConvert.SerializeObject(payload);
        //    var httpContent = new StringContent(stringPayload, Encoding.UTF8, "application/json");
        //    hash = await PinataService.GetHashAsync(httpContent, "metadata.json");
        //    nft.metadata = hash + "/metadata.json";//already prefixed "ipfs://" + 

        //    if (file2 != null)
        //    {
        //         hash = await PinataService.GetHashAsync(new StreamContent(file2.OpenReadStream()), file2.FileName);
        //        nft.secretLink = "ipfs://" + hash + "/"+ file2.FileName;
        //    }
        //    nft.email = User.Identity.Name;
        //    Nftcrud.nftList.Add(nft);
        //    return RedirectToAction("Inventory");
        //}
     


     

        public IActionResult Help()
        {
            return View();
        }
        public IActionResult Contact()
        {
            return View();
        }
        public IActionResult VoteDao()
        {
            return View();
        }
        public IActionResult Proposals()
        {
            return View();
        }
    }
}