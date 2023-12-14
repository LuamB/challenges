console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

// We hide The TOS initially
hideTosError();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  console.log("tosCheckbox.checked: ", tosCheckbox.checked);
  const isChecked = tosCheckbox.checked;

  // If it is unchecked, I don't let the submit to happened
  if (!isChecked) {
    showTosError();
    return;
  }

  //If it is checked it will come down here.

  console.log("I pass");
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

tosCheckbox.addEventListener("change", (e) => {
  console.log("event change: ", e);

  const isChecked = tosCheckbox.checked;
  if (!isChecked) {
    showTosError();
  } else {
    hideTosError();
  }
});
