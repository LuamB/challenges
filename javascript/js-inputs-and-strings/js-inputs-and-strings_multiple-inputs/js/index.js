console.clear;
/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

// button.addEventListener("click", () => {
//   // First click
//   const firstValue = firstInput.value;
//   secondInput.value = firstValue;
// });

// button.addEventListener("click", () => {
//   // Second click
//   const firstValue = firstInput.value;
//   secondInput.value = firstValue.toUpperCase();
// });

// button.addEventListener("click", () => {
//   // Third click
//   const firstValue = firstInput.value;
//   firstInput.value = secondInput.value;
//   secondInput.value = firstValue;
// });

// One buttion, multiple inputs

// Set counter
let counter = 0;

// Declaration of firstValue outside the switch statement
const firstValue;

button.addEventListener("click", () => {
  // Increment the counter
  counter++;

  // Switch between different actions based on the counter value
  switch (counter) {
    case 1:
      // Initialize firstValue inside the case
      firstValue = firstInput.value;

      // Copy the value of firstValue into the second input field
      secondInput.value = firstValue;

      // Do nothing else with the counter or button text
      break;

    case 2:
      // Initialize firstValue inside the case
      firstValue = firstInput.value;

      // Convert the value of firstValue to uppercase and copy it into the second input field
      secondInput.value = firstValue.toUpperCase();

      // Do nothing else with the counter or button text
      break;

    default:
      // Initialize firstValue inside the case
      firstValue = firstInput.value;

      // Swap the values of the two input fields
      const temp = firstInput.value;
      firstInput.value = secondInput.value;
      secondInput.value = temp;

      // Increment the counter
      counter++;
      break;
  }
});
