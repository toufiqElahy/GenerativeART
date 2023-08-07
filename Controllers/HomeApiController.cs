using GenerativeNFT.Data;
using GenerativeNFT.Models;
using GenerativeNFT.services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Net;
using System.Text;

namespace GenerativeNFT.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class HomeApiController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private IWebHostEnvironment Environment;
        public HomeApiController(IWebHostEnvironment _environment, ApplicationDbContext context)//, ILayerService layerService, ICollectionService collectionService, IMetadataService metadataService)
        {
            Environment = _environment;
            _context = context;
        }
       
        [HttpGet(Name = "ArtsById")]
        public string[] ArtsById(string userEthAddress,string nftId)
        {
                string wwwPath = this.Environment.WebRootPath;

                string targetFolder = wwwPath + "/Images/" + userEthAddress + "/"+nftId + "/images/";
                
                    string[] fileNames = Directory.GetFiles(targetFolder);

                    return fileNames;
              

        }
        [HttpGet(Name = "GeneratedARTsIfExists")]
        public string[]? GeneratedARTsIfExists(string userEthAddress)
        {
                string wwwPath = this.Environment.WebRootPath;

                var addr = userEthAddress + "/";
                string targetFolder = wwwPath + "/Images/" + addr + "output/images/";
                var fe = new FileInfo(targetFolder);
                if (fe.Directory.Exists)
                {
                    string[] fileNames = Directory.GetFiles(targetFolder);

                    return fileNames;
            }
            
                return null;
           
        }
        private async Task upload([FromForm] IFormFileCollection files,string targetFolder)
        {
            foreach (IFormFile file in files)
            {
                if (file.Length <= 0) continue;

                //fileName is the the fileName including the relative path
                //var filePath = file.FileName.Substring(file.FileName.IndexOf('/') + 1);
                string path = Path.Combine(targetFolder, file.FileName);

                //check if folder exists, create if not
                var fi = new FileInfo(path);
                fi.Directory?.Create();

                //copy to target
                using var fileStream = new FileStream(path, FileMode.Create);
                await file.CopyToAsync(fileStream);
            }
        }
        [HttpPost(Name = "CreateGenerativeNFT")]
        public async Task<string> CreateGenerativeNFT(string userEthAddress, string userEmail, Nft nft, [FromForm] IFormFileCollection files)
        {
            string wwwPath = this.Environment.WebRootPath;

            var addr = userEthAddress;
            string targetFolder = wwwPath + "/Images/" + addr + "/output/";
            string finalFolder = wwwPath + "/Images/" + addr+"/" + nft.id+ "/";
            ////
            if (files.Count > 0)
            {
                await upload(files, targetFolder + "images/");
            }
            ///
            string[] fileNames = Directory.GetFiles(targetFolder+"images/");
            /////
            // 33ms delay (~30fps)
            using (var gif = AnimatedGif.AnimatedGif.Create(Path.Combine(targetFolder, nft.id+".gif"), 20))
            {
                for (var i = 0; i < fileNames.Length; i++)
                {
                    //Image img = Image..FromFile(Path.Combine(outputPath, $"{i.ToString().PadLeft(3, '0')}.png"));
                    gif.AddFrame(fileNames[i]);
                }
            }
            /////
            Directory.Move(targetFolder, finalFolder);
            nft.creatorEthAddr= addr;
            nft.email = userEmail;
            _context.Nft.Add(nft); await _context.SaveChangesAsync();//Nftcrud.nftList.Add(nft);
            return "Nft Is Created";
        }
        [HttpGet(Name = "NFTsByEmail")]
        public async Task<List<Nft>> NFTsByEmail(string userEmail)
        {
            var result=await _context.Nft.Where(x => x.email == userEmail).ToListAsync();
            return result;
        }
    }
}