const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// Capture elements from the DOM and assign them to variables

let moon = document.getElementById("moon");
let sun = document.getElementById("sun");

let button = document.getElementById("button");
let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");

// let alert = document.getElementById("alert");

// Generate reusable functions for passwords

function generatePasswordOne() {
  let password = [];
  for (let i = 0; i < 15; i++) {
    let randomCharacter = characters[Math.floor(Math.random() * 91)];
    password.push(randomCharacter);
  }
  return password.join("");
}

// function generatePasswordTwo() {}
function generatePasswordTwo() {
  let password = [];
  for (let i = 0; i < 15; i++) {
    let randomCharacter = characters[Math.floor(Math.random() * 91)];
    password.push(randomCharacter);
  }
  return password.join("");
}

button.addEventListener("click", function (e) {
  passwordOne.textContent = generatePasswordOne();
  passwordTwo.textContent = generatePasswordTwo();
});

// Adding a click event listener to add a clipboard API

passwordOne.addEventListener("click", function (e) {
  navigator.clipboard
    .writeText(passwordOne.textContent)
    .then(() => {
      alert("Password copied!");
    })
    .catch(() => {
      alert("An error occured");
    });
});

passwordTwo.addEventListener("click", () => {
  navigator.clipboard
    .writeText(passwordOne.textContent)
    .then(() => {
      alert("Password copied!");
    })
    .catch(() => {
      alert("An error occured");
    });
});

// Exploring light and dark modes

let heading = document.getElementById("heading");
moon.addEventListener("click", () => {
  document.body.style.backgroundColor = "#273549";
  heading.style.color = "#ECFDF5";
  passwordOne.style.backgroundColor = "#ECFDF5";
  passwordTwo.style.backgroundColor = "#ECFDF5";
});

sun.addEventListener("click", () => {
  document.body.style.backgroundColor = "#ECFDF5";
  heading.style.color = "#273549";
  passwordOne.style.backgroundColor = "#273549";
  passwordTwo.style.backgroundColor = "#273549";
});
