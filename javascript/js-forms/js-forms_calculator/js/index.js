console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  // Select input values
  const valueA = parseInt(form.elements.numberA.value);
  const valueB = parseInt(form.elements.numberB.value);

  // Select operator
  const operator = form.elements.operator.value;

  // Check
  console.log(`${operator}: ${valueA}, ${valueB}`);

  // Calculation
  switch (operator) {
    case "addition":
      result = add(valueA, valueB);
      break;
    case "subtraction":
      result = subtract(valueA, valueB);
      break;
    case "multiplication":
      result = multiply(valueA, valueB);
      break;
    case "division":
      result = parseFloat(divide(valueA, valueB)).toFixed(2);
      break;
    default:
      return;
  }
  // Check
  console.log(result);
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
