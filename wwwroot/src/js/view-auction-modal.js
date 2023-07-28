ViewAuctionM = {
  init: () => {
    console.log('ViewAuctionM init')
    return ViewAuctionM.bindEvents()
  },

  bindEvents: () => {
    $('#viewAuctionModal').on('click', '#buyButton', ViewAuctionM.getCurrentPrice)
  },

  getCurrentPrice: () => {
    web3.eth.getAccounts((error, accounts) => {
      if (error) {
        throw error
      }

      const account = accounts[0]
      const auctionId  = parseInt($('#viewAuctionModal .panel-body').data('auction-id'))
      const tokenToBuy = parseInt($('#viewAuctionModal .number-template .number').data('token-id'))

      /*
      console.log(   'account: ' + account)
      console.log( 'auctionId: ' + auctionId)
      console.log('tokenToBuy: ' + tokenToBuy)
      */

      App.contracts.NFTDutchAuction.deployed().then((instance) => {
        return instance.getCurrentPriceByAuctionId(auctionId, {from: account})
      }).then((currentPrice) => {
        console.log(`current price: ${currentPrice}`)
        return ViewAuctionM.bid(currentPrice, {from: account})
      }).catch((err) => {
        console.error(err.message)
      })
    })

  },

  bid: (price) => {
    // get values
    const tokenToBuy = $('#viewAuctionModal .number-template .number').attr('data-token-id');
    const auctionToBuy = $('#viewAuctionModal .number-template .panel-body').attr('data-auction-id')

    web3.eth.getAccounts((error, accounts) => {
      if (error) {
        throw error.message
      }

      const account = accounts[0]

      App.contracts.NFTDutchAuction.deployed().then((instance) => {
        price=$('#bidPrice').val();
        //price=parseInt(price).toBigNumber();
        console.log(`calling instance.bid() with price: ${price}`)
        // TODO: calculate fixed gas amount
        //return instance.bid(tokenToBuy, {value: price, from: account, gas: 250000})
        //price=web3.toWei(price, 'ether');
        console.log(price)

        return instance.bidOnAuction(auctionToBuy, {value: price, from: account})
      }).then((result) => {
        //location.href='/inventory.html';
        location.reload();
        return $('#viewAuctionModal').modal('hide')
      }).catch((err) => {
        console.error(err.message)
      })
    })

  },
}

$(() => {
  $(window).load(() => {
    //ViewAuctionM.init()
  })
})
