using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace GenerativeNFT.services
{
    public static class SendEmail
	{
		public static async Task<bool> SendEmailAsyncn(string toAddress, string body)
		{
			var smtpClient = new SmtpClient
			{

				Host = "smtp.gmail.com", // set your SMTP server name here
				Port = 587, // Port 
				EnableSsl = true,

				Credentials = new NetworkCredential("gravitycashonline@gmail.com", "yiwsebyqcwwudlmv")
			};

			using (var message = new MailMessage("gravitycashonline@gmail.com", toAddress)
			{
				IsBodyHtml = true,
				Subject = "Gravity Cash",
				Body = body
			})
			{
				try
				{
					await smtpClient.SendMailAsync(message);
				}
				catch (Exception ex)
                {

					throw;
				}
			}
			return true;
		}
	}
}