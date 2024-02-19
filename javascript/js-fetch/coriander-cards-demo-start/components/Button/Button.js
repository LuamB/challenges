export const Button = (text, onClick) => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = text;

  button.addEventListener("click", onClick);

  return button;
};
