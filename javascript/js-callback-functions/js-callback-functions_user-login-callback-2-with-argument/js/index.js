console.clear();

// function handleUserLogin(onSuccess) {
//   onSuccess("Jane Doe");
// }

// // The exercise starts here!

// function showWelcomeMessage(userName) {
//   console.log(`Welcome ${userName}! You are logged in now.`);
// }

// handleUserLogin(showWelcomeMessage);

// handleUserLogin((userName) => {
//   console.log(`Welcome ${userName}! You are logged in now.`);
// });

//Next challenge solution

// function handleUserLogin(onSuccess) {
//   onSuccess("Jane Doe", "admin");
// }

// function showWelcomeMessage(userName, userRole) {
//   console.log(`Welcome ${userName}! You are logged in now as ${userRole}`);
// }

// handleUserLogin(showWelcomeMessage);

// handleUserLogin((userName, userRole) => {
//   console.log(`Welcome ${userName}! You are logged in now as ${userRole}`);
// });

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}`);
}

function showErrorMessage(errorMessage) {
  console.log(`login error: ${errorMessage}`);
}

handleUserLogin(showWelcomeMessage, showErrorMessage, "Jane Doe");

