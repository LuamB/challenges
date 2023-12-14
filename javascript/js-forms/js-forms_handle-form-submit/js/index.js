console.clear();

const form = document.querySelector('[data-js="form"]');
const firstNameInput = document.getElementById("first-name");

form.addEventListener("submit", (event) => {
  // Preventing the default behavior.
  event.preventDefault();
  // All form data (in object form) logged into the console
  const formData = new FormData(event.target);
  const dataObject = Object.fromEntries(formData);
  console.log("Data: ", dataObject);

  // Reset values of inputs
  event.target.reset();

  // Focus the First Name input field
  firstNameInput.focus();
});
