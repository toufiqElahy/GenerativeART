// https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8

const ContractAddressNFT = "0xd8eB48885429600dc036D10D1e61b503c5AF7e44"; //"0xf570d052FAD5F624E14D258b6c8Aaf5d267d67BA";//"0x6148CF3B6b1de553eB531051156A18C5F0beFEbD";
//var ContractAddressAuction = "0xc6b3582E09F13d267c6200ec42901Bd1C7F77AdC";

const abiNFT = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "string", "name": "evntName", "type": "string" }, { "indexed": true, "internalType": "string", "name": "category", "type": "string" }, { "indexed": false, "internalType": "address", "name": "msgSender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "auctionId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "coinpayUser", "type": "address" }], "name": "AuctionStatus", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_auctionId", "type": "uint256" }], "name": "bidOnAuction", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_auctionId", "type": "uint256" }], "name": "cancelAuctionByAuctionId", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "category", "type": "string" }, { "internalType": "string", "name": "hash", "type": "string" }, { "internalType": "string", "name": "secretHash", "type": "string" }, { "internalType": "string", "name": "metadataURI", "type": "string" }, { "internalType": "uint256", "name": "_startingPrice", "type": "uint256" }, { "internalType": "uint64", "name": "_duration", "type": "uint64" }, { "internalType": "address", "name": "_coinpayUser", "type": "address" }], "name": "createAuction", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_auctionId", "type": "uint256" }], "name": "finalizeAuction", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_auctionId", "type": "uint256" }], "name": "getAuctionByAuctionId", "outputs": [{ "internalType": "string", "name": "category", "type": "string" }, { "internalType": "bool", "name": "isActive", "type": "bool" }, { "internalType": "address", "name": "seller", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "startingPrice", "type": "uint256" }, { "internalType": "uint256", "name": "duration", "type": "uint256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "address", "name": "coinpayUser", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_auctionId", "type": "uint256" }], "name": "getBidsById", "outputs": [{ "components": [{ "internalType": "address payable", "name": "from", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "internalType": "struct UniqueAsset.Bid[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_auctionId", "type": "uint256" }], "name": "getBidsCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_auctionId", "type": "uint256" }], "name": "getCurrentBid", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_auctionId", "type": "uint256" }], "name": "getCurrentPriceByAuctionId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_auctionId", "type": "uint256" }], "name": "getSecretHash", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "getTokenByIdentity", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "hash", "type": "string" }, { "internalType": "string", "name": "metadataURI", "type": "string" }], "name": "kycBasedNft", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_auctionId", "type": "uint256" }, { "internalType": "uint256", "name": "_startingPrice", "type": "uint256" }, { "internalType": "uint64", "name": "_duration", "type": "uint64" }, { "internalType": "address", "name": "_coinpayUser", "type": "address" }], "name": "reCreateAuction", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "_newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
let iface = new ethers.utils.Interface(abiNFT);
//var provider = new ethers.providers.Web3Provider(window.ethereum);
//var provider = new ethers.providers.InfuraProvider('rinkeby');
//const signer = provider.getSigner();
var provider = new ethers.providers.JsonRpcProvider('https://blockchain.coinpay.cr');//new ethers.providers.Web3Provider(window.ethereum);//new ethers.providers.InfuraProvider('rinkeby');

var contractNFT = new ethers.Contract(ContractAddressNFT, abiNFT, provider);

var etherscanTx = 'https://explorer.coinpay.cr/';//'https://rinkeby.etherscan.io/tx/';//'https://etherscan.io/tx/';



var globalCountDownTimerIsOn = false;
var countDownDate = new Date().getTime();//global variable

function customIpfsPath(uri) {
    uri = uri.replace("ipfs://", "");
    return 'https://gateway.pinata.cloud/ipfs/' + uri;
}

async function nftApi(dt,amnt=0) {
    const result = await $.ajax({
        url: "/home/NftApi?data=" + dt + "&amount=" + amnt,
        type: 'GET'
    });

    return result;
}
/////////////

var signer=null;
window.addEventListener('load', async () => {
  //async function fnc(){

  
//}
})

////
$(function () {
    $('#connectWeb3').on('click', async function (event) {
        event.preventDefault();
        // Modern dapp browsers...
        if (window.ethereum) {

            try {
                // Request account access if needed
                $('#overlay').show()
                $('#overlay .web3-not-unlocked').show()
                await ethereum.enable()
                // Acccounts now exposed
                $('#overlay').hide()


                provider = new ethers.providers.Web3Provider(window.ethereum);
                await provider.send("eth_requestAccounts", []);
                signer = provider.getSigner();


                // Listen for account changes
                //const accounts = await web3.eth.getAccounts();
                //setInterval(async() => {
                //  var accnts = await web3.eth.getAccounts();
                //  if (accnts[0] !== accounts[0]) {
                //    account = web3.eth.accounts[0]
                //    // update interface
                //    location.reload()
                //  }
                //}, 1000)

            } catch (error) {
                // User denied account access...
                alert('user denied account access')
            }
        }
        // Non-dapp browsers...
        else {
            $('#overlay').show()
            $('#overlay .no-web3-browser').show()
            alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    })

    //$('#elementId').on('click', async function (event) {
    //    event.preventDefault();
    //    var addr = await signer.getAddress();
    //    if (addr != '') {
    //        location.href = '/home/login?email=user&ethAddress=' + addr;
    //    } else {
    //        alert('user denied account access')
    //    }
        
    //})
    //var element = document.getElementById('elementId');
    //if (typeof (element) != 'undefined' && element != null) {
    //    // Exists.
    //    location.href = '/home/login?email=user&ethAddress=' + await signer.getAddress();
    //}
    //fnc();
    //web3.utils.fromWei(startingPrice, "ether"); alert(ethers.utils.formatEther(startingPrice));
    //web3.utils.tomWei(startingPrice, "ether"); alert(ethers.utils.parseEther(ethers.utils.formatEther(startingPrice)));
})
////







