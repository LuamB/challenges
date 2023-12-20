console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');


pizzaInput1.addEventListener("input", () => {
  console.log('hello')
  let diameter1 = pizzaInput1.value;
  let diameter2 = pizzaInput2.value;
  calculatePizzaGain(diameter1, diameter2);
  updatePizzaDisplay(pizza1, diameter1);
  updateOutputColor(diameter1, diameter2);
});

pizzaInput2.addEventListener("input", () => {
  let diameter1 = pizzaInput1.value;
  let diameter2 = pizzaInput2.value;
  calculatePizzaGain(diameter1, diameter2);
  updatePizzaDisplay(pizza2, diameter2);
  updateOutputColor(diameter1, diameter2);
});

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  const pizzaArea1 = (diameter1 / 2) ** 2 * Math.PI;
  const pizzaArea2 = (diameter2 / 2) ** 2 * Math.PI;
  output.textContent = Math.round(
    ((pizzaArea2 - pizzaArea1) / pizzaArea1) * 100
  );

}


// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  const result = (newSize / 24) * 100;
  pizzaElement.style.width = `${result}px`;
}

// Task 3

function updateOutputColor(size1, size2) {
  outputSection.style.backgroundColor = `var(${
    size1 <= size2 ? "--green" : "--red"
  }`;
}
