console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

// Call handleUserLogin below!

function showWelcomeMessage() {
  console.log("Welcome! You are logged in now.");
}

//Named callback with regular function
handleUserLogin(showWelcomeMessage);

// Anonymous callback function
handleUserLogin(function () {
  showWelcomeMessage();
});

// Anonymous callback function
handleUserLogin(function () {
  console.log("Welcome! You are logged in now.");
});
