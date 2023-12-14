console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

/* Function setting hidden attribute to false with empty string "", 
which means "" will be displayed. .setAttribute("hidden", false) would have the same effect.
Note: the default of hidden for all HTML elements is false */
function hideTosError() {
  tosError.setAttribute("hidden", "");
}

/* Function removing hidden attribute. Note: Calling removeAttribute("hidden") on an element 
with "hidden" set to false (default) has the same effect as calling setAttribute("hidden", true). 
Both of these actions will cause the element to be hidden. */
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
  /* alert() function is used to display a pop-up window with a message.  */
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
