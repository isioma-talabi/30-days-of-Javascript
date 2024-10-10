// Declare Variables for Game
let cards = [];
let sum = 0;

// Variables to track game logic
let hasBlackJack = false;
let isOutOfGame = false;
let messageToPlayer = " ";

// Variable to declare game cards
let gameCards = document.querySelector("#game-cards");

// Variable to declare the sum of the game
let gameSum = document.getElementById("game-sum");

// Variable to capture the start game button in the DOM
let button = document.getElementById("button");

// Variable to display message to player
let messageDisplay = document.getElementById("message-el");

//  Variable to capture New Card Button
let newCardButton = document.getElementById("new-card");

// Declaring confetti variable
const jsConfetti = new JSConfetti();

// Creating a reusable function to start and update game state
function updateGameState() {
  gameCards.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    gameCards.textContent += cards[i] + " ";
  }

  gameSum.textContent = "Sum: " + sum;

  if (sum <= 20) {
    messageToPlayer = "Do you want to draw a new card?";
    messageDisplay.style.color = "#daa250";
  } else if (sum === 21) {
    messageToPlayer = "Wohoo! You've got Blackjack!";
    messageDisplay.style.color = "#17864b";
    hasBlackJack = true;

    // Trigger confetti when Blackjack is hit
    jsConfetti.addConfetti();
  } else {
    messageToPlayer = "You're out of the game!";
    messageDisplay.style.color = "#e03535";
    isOutOfGame = true;
  }
  messageDisplay.textContent = messageToPlayer;
  console.log(messageToPlayer);
}

// Create Event Listener for Start Game Button
button.addEventListener("click", function (e) {
  // Declare Variables for Game Cards
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  updateGameState();
});

// Create Event Listener for New Card Button
newCardButton.addEventListener("click", function (e) {
  // Created a conditional work out a game logic to prevent winners/ losers from drawing new cards
  if (isOutOfGame === false && hasBlackJack === false) {
    let thirdCard = getRandomCard();
    sum += thirdCard;
    // Push the new card into the card array
    cards.push(thirdCard);
    updateGameState();
  }
});

// Creating a function that will return random cards between 1 - 13

/* An explanation of the Math functions are as follows:
The Math function is a built in function in JS with the floor() and random() methods
The random() method generates random numbers between 0 and 1
However, when you multiply by a whole integer, you manipulate the result to generate whole numbers between 0 and the number.
When you add a 1 to the expression, it results in a range of numbers beginning from 1.
The floor() method rounds down to the nearest whole integer.
*/

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13 + 1);

  /* Setting some rules of the game: 
    if 1 is drawn ---> return 11
    if 11-13 is drawn ---> return 10
    Create conditionals to return this logic
    */
  if (randomCard === 1) {
    return 11;
  } else if (randomCard > 10) {
    return 10;
  } else {
    return randomCard;
  }
}
