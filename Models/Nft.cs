using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GenerativeNFT.Models
{
    public class Nft
    {
        public Guid id { get; set; } = Guid.NewGuid();
        public string name { get; set; }
        public string description { get; set; }
        public string category { get; set; }
        public string image { get; set; }
        public string metadata{ get; set; }
        public string secretLink { get; set; }
        public string hash { get; set; }
        public DateTime dt { get; set; } = DateTime.UtcNow;
        public string email { get; set; }
        public string status { get; set; } = "Reviewing";//Approved/Declined
    }

    public static class Nftcrud
    {
        public static List<Nft> nftList = new List<Nft>();

        public static string customIpfsUrl(string uri)
        {
            uri = uri.Replace("ipfs://", "");
            return "https://gateway.pinata.cloud/ipfs/" + uri;
        }

    }
}