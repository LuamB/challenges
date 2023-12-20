const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

//Task 1: Use forEach() with callback function

colors.forEach((color) => {
  const perColor = document.createElement("div");
  perColor.classList.add("color-box");
  perColor.style.backgroundColor = color;
  document.body.append(perColor);
});

//Task 2: Replace callback function with reference function

function renderColorBox(color) {
  const perColor = document.createElement("div");
  perColor.classList.add("color-box");
  perColor.style.backgroundColor = color;
  document.body.append(perColor);
}

colors.forEach(renderColorBox);
