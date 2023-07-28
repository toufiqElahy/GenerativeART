using Pinata.Client;
using System.Net.Http;
using System.Threading.Tasks;

namespace GenerativeNFT.services
{
    public class PinataService
    {
        private static Config config = new Config
        {
            ApiKey = "f74d6367c3728fc4f490",
            ApiSecret = "0903a96cffed49496735f03e912fea487396808dfad9c1fc78f2ef5369f72b1c"
        };
        private static PinataClient client = new PinataClient(config);

        public static async Task<string> GetHashAsync(HttpContent httpContent,string fileName)
        {
            var response = await client.Pinning.PinFileToIpfsAsync(content =>
            {
                content.AddPinataFile(httpContent, "/nft/"+fileName);
            });

            if (response.IsSuccess)
            {
                //File uploaded to Pinata Cloud and can be accessed on IPFS!
                return response.IpfsHash; // QmR9HwzakHVr67HFzzgJHoRjwzTTt4wtD6KU4NFe2ArYuj
                
            }
            return "";
        }

        public static async Task<int> UnPinAsync(string hash)
        {
            var response = await client.Pinning.UnpinAsync(hash);

            return response.StatusCode;
        }
    }
}