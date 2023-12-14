console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
// Bonus: Success message
const complaintSuccess = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

// Bonus: Success message
function hideSuccess() {
  complaintSuccess.setAttribute("hidden", "");
}

function showSuccess() {
  complaintSuccess.removeAttribute("hidden");
}

// Hide TOS error message
hideTosError();
// Hide success message
hideSuccess();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  const isChecked = tosCheckbox.checked;

  if (!isChecked) {
    showTosError();
    return; /* Prevents alert() to be called */
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");

  // Bonus: Success message
  if (event.submitter && isChecked) {
    showSuccess();
  } else {
    hideSuccess();
  }
});

tosCheckbox.addEventListener("change", (event) => {
  event.preventDefault();

  const isChecked = tosCheckbox.checked;

  if (!isChecked) {
    showTosError();
  } else {
    hideTosError();
  }
  // // Bonus: Success message
  // if (isChecked) {
  //   showSuccess();
  // } else {
  //   hideSuccess();
  // }
});
