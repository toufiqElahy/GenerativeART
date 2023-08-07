using GenerativeNFT.Event;
using GenerativeNFT.Models;
using GenerativeNFT.Services.Collection;
using GenerativeNFT.Services.Layer;
using GenerativeNFT.Services.Metadata;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;
using System.Diagnostics;
using System.IO;
using static System.Net.Mime.MediaTypeNames;

namespace GenerativeNFT.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class GenerativeARTsApiController : ControllerBase
    {
        private readonly ILayerService layerService;
        private readonly ICollectionService collectionService;
        private readonly IMetadataService metadataService;
        private IWebHostEnvironment Environment;
        public GenerativeARTsApiController(IWebHostEnvironment _environment, ILayerService layerService, ICollectionService collectionService, IMetadataService metadataService)
        {

            this.layerService = layerService;
            this.collectionService = collectionService;
            this.metadataService = metadataService;

            Environment = _environment;
        }

        [HttpPost(Name = "UploadLayers")]
        public async Task<string> UploadLayers(string userEthAddress,[FromForm] IFormFileCollection files)
        {
            string wwwPath = this.Environment.WebRootPath;

            var addr = userEthAddress + "/";
            string targetFolder = wwwPath + "/Images/" + addr + "layers/";

            var fe = new FileInfo(targetFolder);
            if (fe.Directory.Exists)
            {
                fe.Directory.Delete(true);
            }

            //target in wwwroot for static files
            //string targetFolder = Path.Combine(_env.WebRootPath, "uploads");
            foreach (IFormFile file in files)
            {
                if (file.Length <= 0) continue;

                //fileName is the the fileName including the relative path
                var filePath = file.FileName.Substring(file.FileName.IndexOf('/') + 1);
                string path = Path.Combine(targetFolder, filePath);

                //check if folder exists, create if not
                var fi = new FileInfo(path);
                fi.Directory?.Create();

                //copy to target
                using var fileStream = new FileStream(path, FileMode.Create);
                await file.CopyToAsync(fileStream);
            }
            
            return "Layer Is Created";
        }
        [HttpPost(Name = "GenerativeImages")]
        public string GenerativeImages(string userEthAddress, string metadataDescription, string metadataImageBaseUri, string metadataExternalUrl, int collectionSize, int collectionInitialNumber, string collectionImagePrefix)
        {
            string wwwPath = this.Environment.WebRootPath;
            //string contentPath = this.Environment.ContentRootPath;

            var addr = userEthAddress + "\\";
            ////string physicalPath = Server.MapPath("~/images/" + ImageName);
            string layersFolder = wwwPath+"\\Images\\" + addr + "layers";
            string outputFolder = wwwPath + "\\Images\\" + addr+ "output";
            int metadataType = 2;

            //this.collectionService.CollectionItemStatus += new EventHandler<ImageEventArgs>(this.OnCollectionItemProcessed);
            //this.collectionService.Create(layersFolder, outputFolder, metadataType, metadataDescription, metadataImageBaseUri, metadataExternalUrl, true, collectionSize, collectionInitialNumber, collectionImagePrefix);



            var bgw = new BackgroundWorker();
            bgw.DoWork += (_, __) =>
            {
                try
                {
                    //this.ValidateForGeneration(layersFolder, outputFolder, metadataImageBaseUri, collectionSize, collectionInitialNumber);
                    this.collectionService.CollectionItemStatus += new EventHandler<ImageEventArgs>(this.OnCollectionItemProcessed);
                    this.collectionService.Create(layersFolder, outputFolder, metadataType, metadataDescription, metadataImageBaseUri, metadataExternalUrl, true, collectionSize, collectionInitialNumber, collectionImagePrefix);


                    //MessageBox.Show(Resource.COLLECTION_CREATED_SUCCESSFULLY);
                }
                catch (Exception ex)
                {
                }
            };

            bgw.RunWorkerCompleted += (_, __) =>
            {
                
            };

            Task.Run(() => bgw.RunWorkerAsync());
            //bgw.RunWorkerAsync();

            return "Generative ARTs Created";
        }
        private void OnCollectionItemProcessed(object sender, ImageEventArgs e)
        {
            
        }
    }
}