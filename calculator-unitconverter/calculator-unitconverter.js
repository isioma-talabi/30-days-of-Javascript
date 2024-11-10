// Grab elements from the DOM and assign variables

// Staging area
const workingStage = document.getElementById("working-stage");
const previewResult = document.getElementById("preview-result");

// Other controls
const historyBtn = document.getElementById("history-btn");
const unitConverterBtn = document.getElementById("unit-converter-btn");
const deleteBtn = document.getElementById("delete-btn");

// Buttons

// First row of buttons
const clearBtn = document.getElementById("clear-btn");
const bracketBtn = document.getElementById("bracket-btn");
const percentageBtn = document.getElementById("percentage-btn");
const divisionBtn = document.getElementById("division-btn");

// Second row of buttons
const sevenBtn = document.getElementById("seven-btn");
const eightBtn = document.getElementById("eight-btn");
const nineBtn = document.getElementById("nine-btn");
const multiplicationBtn = document.getElementById("multiplication-btn");

// Third row of buttons
const fourBtn = document.getElementById("four-btn");
const fiveBtn = document.getElementById("five-btn");
const sixBtn = document.getElementById("six-btn");
const minusBtn = document.getElementById("minus-btn");

// Fourth row of buttons
const oneBtn = document.getElementById("one-btn");
const twoBtn = document.getElementById("two-btn");
const threeBtn = document.getElementById("three-btn");
const plusBtn = document.getElementById("plus-btn");

// Fifth row of buttons
const plusMinusPlusBtn = document.getElementById("plus-minus-btn");
const zeroBtn = document.getElementById("zero-btn");
const pointBtn = document.getElementById("point-btn");
const equalsBtn = document.getElementById("equals-btn");

console.log(clearBtn);

// Declare memory variable to display in working stage area and will be stored in local storage
let memory = " ";

// Function to handle all mathematical operations

function evaluateExpression(expression) {
  let token = expression.split(" "); //splits each number token and operators into an array of strings

  //For loop to iterate over each operator. An increment of +=2 to skip over numbers and return operators
  for (let i = 1; i < token.length; i += 2) {
    let operator = token[i];

    if (operator === "*" || operator === "/") {
      let previousNum = parseFloat(token[i - 1]);
      let nextNum = parseFloat(token[i + 1]);
      let result;

      if (operator === "*") {
        result = previousNum * nextNum;
      } else if (operator === "/") {
        result = previousNum / nextNum;
      }

      // Replace the calculated number and set the operator and next number to "null"
      token[i - 1] = result; // Assign the i - 1 index to the value of the result
      token.splice(i, 2); // Remove the operator and next number with the splice method
      i -= 2; // Adjust the index to re-evaluate the updated array
    }
  }

  // Operations for + and -

  let result = parseFloat(token[0]); //turns each string number token into a floating number and presents a result
  for (let i = 1; i < token.length; i += 2) {
    let operator = token[i];
    let nextNum = parseFloat(token[i + 1]);
    if (operator === "+") {
      result += nextNum;
    } else if (operator === "-") {
      result -= nextNum;
    }
  }

  return result;
}

console.log(evaluateExpression("2 + 3 * 4 - 5 / 2")); // Output: 11.5

// Event Listeners using Event Delegation
const calculator = document.getElementById("calculator");

calculator.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn")) {
    const buttonValue = event.target.getAttribute("data-value");
    memory += buttonValue + " ";
    workingStage.textContent = memory;
    buttonClick();
  }
});

// function to handle display of calculated expression
function buttonClick(value) {
  if (value === "=") {
    const result = evaluateExpression(expression);
  }
}
