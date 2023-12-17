console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  for (i = 1; i <= 5; i++) {
    const starImg = document.createElement("img");
    starImg.src =
      filledStars >= i ? "./assets/star-filled.svg" : "./assets/star-empty.svg";
    // add styling
    // starImg.classList.add("img");

    let index = i;

    // Add a click event listener to each star
    starImg.addEventListener("click", () => {
      // Re-render stars based on the clicked star's position (i)
      renderStars(index);
    });

    starContainer.appendChild(starImg);
  }

  // add styling
  // starContainer.classList.add("star-container");

  //--^-- your code here --^--
}

renderStars(0);
