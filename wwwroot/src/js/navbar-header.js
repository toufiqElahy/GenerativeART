window.addEventListener('load',async () => {
  const accounts = await web3.eth.getAccounts()
  //var account= await signer.getAddress();
  $('#connectedAccount').append(`<a>Account: ${accounts[0]}</a>`);
  //$('#connectedAccount').append(`<a>Account: ${account}</a>`)
})
