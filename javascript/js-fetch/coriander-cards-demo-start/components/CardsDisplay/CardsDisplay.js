export const CardsDisplay = () => {
    const cardsDisplay = document.createElement("div");
    cardsDisplay.classList.add("cards");
    cardsDisplay.innerHTML =
        "<h1>Press play to get your first set of cards</h1>";

    return cardsDisplay;
};
