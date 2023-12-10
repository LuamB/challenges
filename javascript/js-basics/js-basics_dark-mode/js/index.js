console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

//Add interactivity

// Query 'Switch to dark mode'-button
const darkButton = document.querySelector('[data-js="dark-mode-button"]');

darkButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

// Query 'Switch to light mode'-button
const lightButton = document.querySelector('[data-js="light-mode-button"]');

lightButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

// Query 'Toggle'-button
const toggleButton = document.querySelector('[data-js="toggle-button"]');

toggleButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});
