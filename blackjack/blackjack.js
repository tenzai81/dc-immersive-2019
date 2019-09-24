
// Deal new two cards to each player Player and Dealer when click on deal button
document.getElementById('dealer-button').addEventListener('deal-button', dealCards);
  function dealCards(){
    document.getElementById('dealer-hand').innerHTML='<img src="images/ace_of_hearts.png" alt="card1"><img src="images/king_of_clubs.png">';
    document.getElementById('player-hand').innerHTML='<img src="images/ace_of_hearts.png" alt="card1"><img src="images/king_of_clubs.png">';
}
// Deal one more card to player when hit button is clicked
document.getElementById('hit-button').addEventListener('hit-button', addCard);
  function addCard(){
    document.getElementById('player-hand').innerHTML+='<img src="images/ace_of_spades.png" alt="card1">';
  }
// Display win or lose message
document.getElementById('stand-button').addEventListener('stand-button', showResults); 
  function showResults(){ 
    document.getElementById('messages').innerHTML=
    'You lose!!!'
    document.getElementById('messages').innerHTML=
    'You win!!!'
  }
