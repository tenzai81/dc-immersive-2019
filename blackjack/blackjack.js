
// Deal new two cards to each player Player and Dealer when click on deal button

    document.getElementById('dealer-hand').innerHTML= cardImage
    // document.getElementById('player-hand').innerHTML='<img src="images/ace_of_hearts.png" alt="card1"><img src="images/king_of_clubs.png">';

// Deal one more card to player when hit button is clicked
// document.getElementById('hit-button').addEventListener('hit-button', addCard);
//   function addCard(){
//     document.getElementById('player-hand').innerHTML+='<img src="images/ace_of_spades.png" alt="card1">';
//   }
// Display win or lose message
// document.getElementById('stand-button').addEventListener('stand-button', showResults); 
//   function showResults(){ 
//     document.getElementById('messages').innerHTML=
//     'You lose!!!'
//     document.getElementById('messages').innerHTML=
//     'You win!!!'
  // }
  // Display card Image

function cardImage(card){
  var cardName;
    if (card.point === 1){
      cardName = 'ace';
  }
    else if (card.point === 11) {
    cardName = 'jack';
  } else if (card.point === 12) {
    cardName = 'queen';
  } else if (card.point === 13) {
    cardName = 'king';
  } else {
    cardName = card.point;
  }
  return 'images/' + cardName + '_of_' + card.suit + '.png';
}

  function randomCard(deck){
     return deck[Math.floor(Math.random()*deck.length)];
  }
  var deck =[{point: 13, suit: "hearts"}, {point: 13, suit: "diamonds"},{point: 13, suit: "clubs"},{point: 13, suit: "spade"},
  {point: 12, suit: "hearts"}, {point: 12, suit: "diamonds"},{point: 12, suit: "clubs"},{point: 12, suit: "spade"},
  {point: 11, suit: "hearts"}, {point: 11, suit: "diamonds"},{point: 11, suit: "clubs"},{point: 11, suit: "spade"}, 
  {point: 10, suit: "hearts"}, {point: 10, suit: "diamonds"},{point: 10, suit: "clubs"},{point: 10, suit: "spade"}, 
 {point: 9, suit: "hearts"}, {point: 9, suit: "diamonds"},{point: 9, suit: "clubs"},{point: 9, suit: "spade"},
  {point: 8, suit: "hearts"}, {point: 8, suit: "diamonds"},{point: 8, suit: "clubs"},{point: 8, suit: "spade"},
  {point: 7, suit: "hearts"}, {point: 7, suit: "diamonds"},{point: 7, suit: "clubs"},{point: 7, suit: "spade"},
  {point: 6, suit: "hearts"}, {point: 6, suit: "diamonds"},{point: 6, suit: "clubs"},{point: 6, suit: "spade"},
  {point: 5, suit: "hearts"}, {point: 5, suit: "diamonds"},{point: 5, suit: "clubs"},{point: 5, suit: "spade"},
  {point: 4, suit: "hearts"}, {point: 4, suit: "diamonds"},{point: 4, suit: "clubs"},{point: 4, suit: "spade"},
  {point: 3, suit: "hearts"}, {point: 3, suit: "diamonds"},{point: 3, suit: "clubs"},{point: 3, suit: "spade"},
  {point: 2, suit: "hearts"}, {point: 2, suit: "diamonds"},{point: 2, suit: "clubs"},{point: 2, suit: "spade"},
  {point: 1, suit: "hearts"}, {point: 1, suit: "diamonds"},{point: 1, suit: "clubs"},{point: 1, suit: "spade"}
  ]
console.log(randomCard(deck))

  