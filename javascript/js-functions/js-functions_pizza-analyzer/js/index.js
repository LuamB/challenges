console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  let area1 = 0.25 * Math.PI * diameter1 ** 2;
  let area2 = 0.25 * Math.PI * diameter2 ** 2;
  output.textContent = Math.round(((area2 - area1) / area1) * 100);
}

calculatePizzaGain(diameter1, diameter2);

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  const newWidth = (newSize / 24) * 100;
  pizzaElement.style.width = `${newWidth}px`;
}

// Task 3
// define the function updateOutputColor here
function updateOutputColor(size1, size2) {
  if (size2 >= size1) {
    outputSection.style.backgroundColor = "var(--green)";
  } else {
    outputSection.style.backgroundColor = "var(--red)";
  }
}
