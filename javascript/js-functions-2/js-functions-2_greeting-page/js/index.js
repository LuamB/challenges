console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Retrieve current time
  const currentTime = new Date().getHours();
  console.log(currentTime);

  if (currentTime >= 6 && currentTime <= 12) {
    return "Good Morning";
  }
  if (currentTime >= 13 && currentTime <= 18) {
    return "Good Afternoon";
  }
  if (currentTime >= 19 && currentTime <= 22) {
    return "Good Evening";
  }
  if (currentTime >= 23 || currentTime <= 5) {
    return "Good Night";
  }
}

function getDayColor() {
  // Retrieve current date
  const currentDay = new Date().getDay();
  console.log(currentDay);

  if (currentDay === 1) {
    return "darkgray";
  }
  if (currentDay >= 2 && currentDay <= 5) {
    return "lightblue";
  }
  if (currentDay >= 2 && currentDay <= 5) {
    return "lightblue";
  }
  if (currentDay === 6 || currentDay === 0) {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
