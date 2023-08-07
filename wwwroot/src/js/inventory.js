$('#accNumberRow').on('click', '.btnsellAuction', function (e) {
    $('#createAuctionModal').modal('show');
  const formattedNumber = $(this).parent().parent().find('.number').html()
  //alert(formattedNumber)
    const number = $(this).attr('data-token-id');
  console.log(number)
  // add number to the modal
  $('#createAuctionModal .number').html(formattedNumber).attr('data-token-id', number)
    //$('#createAuctionModal .panel-body .number')
    if (isNaN(number)) {
        $('#submitAuction').attr('guid', $(this).attr('guid'))
    }
  $('#submitAuction').attr('data-token-id', number)
  // reset step progress on modal
  $('#progress ol li > .step-completed').hide()
  $('#progress ol li').removeClass('step-completed')
  //$('#submitAuction').text('Allow transfer of NFT')
  // https://getbootstrap.com/docs/4.1/components/modal/
  // when modal is ready
  
  //$('#createAuctionModal').on('shown.bs.modal', (e) => {
  //  // fit textsize of large numbers in modal
  //  fitty('#createAuctionModal .number', {
  //    minSize: 20,
  //    maxSize: 60
  //  })
  //})
})

var $progress = $('#toufiqElahy');


$('#accNumberRow').on('click', '.btnTransfer', function(e) {
  const number = $(this).attr('data-token-id')
  console.log(number)
  // add number to the modal
  $('#tokenId').val(number);
  $('#transferForm').removeClass('hide');
    $("html, body").animate({ scrollTop: 0 }, "slow");
})

$('#accNumberRow').on('click', '.btndelAuction', async function (e) {
    var $this = $(this);
    $this.prop("disabled", true);
    let tokenId = $this.attr('data-token-id');
  
    var account = signer == null ? viewBagAddress : await signer.getAddress();
    var result = { hash: '' };
    if (signer == null) {
        var dt = iface.encodeFunctionData("cancelAuctionByAuctionId", [tokenId]);
        result.hash = await nftApi(dt);

    } else {
        result = await contractNFT.connect(signer).cancelAuctionByAuctionId(tokenId, { from: account });
    }
    
    $progress.addClass("spa-loader")
    provider.waitForTransaction(result.hash).then((receipt) => {
        $progress.removeClass("spa-loader")
        console.log("Transaction Mined: " + receipt.transactionHash);
        //document.getElementById('lnkInventory').click();//location.reload();
        $this.hide().parent().find('.btnsellAuction,.btnTransfer,.btnDelete').show();
      });

  
  
})

$('#accNumberRow').on('click', '.btnSellToBidder', async function (e) {
    var $this = $(this);
    $this.prop("disabled", true);
    let auctionId = $this.attr('data-auction-id');

    var account = signer == null ? viewBagAddress : await signer.getAddress(); 
    var result = { hash: '' };
    if (signer == null) {
        var dt = iface.encodeFunctionData("finalizeAuction", [auctionId]);
        result.hash = await nftApi(dt);

    } else {
        result = await contractNFT.connect(signer).finalizeAuction(auctionId, { from: account });
    }
    
    $progress.addClass("spa-loader")
    provider.waitForTransaction(result.hash).then((receipt) => {
        $progress.removeClass("spa-loader")
        console.log("Transaction Mined: " + receipt.transactionHash);
        //document.getElementById('lnkInventory').click();//location.reload();
        $this.closest('.panel-body').parent().remove();
      });
  
  
  
})

$('#btn-cancel').on('click', function(e) {
  $('#transferForm').addClass('hide');
  
})

$('#btn-transferOld').on('click', async function(e) {
    $(this).prop("disabled", true);
    var account = signer == null ? viewBagAddress: await signer.getAddress();
    var tokenId = $('#tokenId').val();

    var result = { hash: '' };
    if (signer == null) {
        var dt = iface.encodeFunctionData("transferFrom", [account, $('#addr').val(), tokenId]);
        result.hash = await nftApi(dt);

    } else {
        result = await contractNFT.connect(signer).transferFrom(account, $('#addr').val(), tokenId, { from: account });
    }
   
    $progress.addClass("spa-loader")
    provider.waitForTransaction(result.hash).then((receipt) => {
        $progress.removeClass("spa-loader")
        console.log("Transaction Mined: " + receipt.transactionHash);
        $('#transferForm').addClass('hide');
        //document.getElementById('lnkInventory').click();//location.reload();
        $('button[data-token-id=' + tokenId + ']:first').closest('.panel-body').parent().remove();
      });
  
  
})

$('#accNumberRow').on('click', '.btnDelete', async function (e) {
    var $this = $(this);
    $this.prop("disabled", true);
    let tokenId = $this.attr('data-token-id');
    
    var account = signer == null ? viewBagAddress : await signer.getAddress(); console.log(account + ',,,,,' + tokenId);
    var result = { hash: '' };
    if (signer == null) {
        var dt = iface.encodeFunctionData("burn", [tokenId]);
        result.hash = await nftApi(dt);

    } else {
        result = await contractNFT.connect(signer).burn(tokenId, { from: account });
    }
    
    $progress.addClass("spa-loader")
    provider.waitForTransaction(result.hash).then((receipt) => {
        $progress.removeClass("spa-loader")
        console.log("Transaction Mined: " + receipt.transactionHash);
        $('#transferForm').addClass('hide');
        //document.getElementById('lnkInventory').click();//location.reload();
        $this.closest('.panel-body').parent().remove();
      });

  
})