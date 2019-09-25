$('#deal-button').click(function() {
    var card, cardUrl;

    dealACard(playerHand, '#player-hand');
    dealACard(dealerHand, '#dealer-hand');
    dealACard(playerHand, '#player-hand');
    dealACard(dealerHand, '#dealer-hand');

    console.log('playerHand', playerHand);
    console.log('dealerHand', dealerHand);

    $('#deal-button').hide();
  });
