console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const orderedList = document.createElement("ol");
main.append(orderedList);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--

for (const lang of programmingLanguages) {
  const listItem = document.createElement("li");
  listItem.textContent = lang;
  orderedList.appendChild(listItem);
}

// --^-- write/change code here --^--
