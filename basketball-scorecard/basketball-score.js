// call textContent of id="display-one" and id="display-two"

let displayOne = document.getElementById("display-one");
let displayTwo = document.getElementById("display-two");

document.getElementById("display-one").textContent = 0;

// Home Scoreboard

let homeButtonOne = document.getElementById("home-one");
let homeButtonTwo = document.getElementById("home-two");
let homeButtonThree = document.getElementById("home-three");

// Declaring the count variable is essential in your basketball scoreboard app because it stores the current score (or state) that you want to track and update each time a button is clicked.

let count = 0;

// Event Listeners
// create functions or addEventListeners to increment for each of the buttons.

homeButtonOne.addEventListener("click", function (e) {
  console.log("I have been clicked");
  count += 1;
  displayOne.textContent = count;
});

homeButtonTwo.addEventListener("click", function (e) {
  count += 2;
  displayOne.textContent = count;
});

homeButtonThree.addEventListener("click", function (e) {
  count += 3;
  displayOne.textContent = count;
});

// Guest Scoreboard

document.getElementById("display-two").textContent = 0;

let guestButtonOne = document.getElementById("guest-one");
let guestButtonTwo = document.getElementById("guest-two");
let guestButtonThree = document.getElementById("guest-three");

let countGuest = 0;

//  Event Listeners

guestButtonOne.addEventListener("click", function (e) {
  countGuest += 1;
  displayTwo.textContent = countGuest;
});

guestButtonTwo.addEventListener("click", function (e) {
  countGuest += 2;
  displayTwo.textContent = countGuest;
});

guestButtonThree.addEventListener("click", function (e) {
  countGuest += 3;
  displayTwo.textContent = countGuest;
});

// Reset Buttons
let resetOneButton = document.getElementById("reset-one");
let resetTwoButton = document.getElementById("reset-two");

resetOneButton.addEventListener("click", function (e) {
  count = 0;
  displayOne.textContent = count;
});

resetTwoButton.addEventListener("click", function (e) {
  countGuest = 0;
  displayTwo.textContent = countGuest;
});
