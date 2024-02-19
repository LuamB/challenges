import { Button } from "../components/Button/Button.js";
import { CardsDisplay } from "../components/CardsDisplay/CardsDisplay.js";

const main = document.querySelector("main");
// console.log('Main element: ', main);

async function handleGetCards() {
  try {
    const response = await fetch(
      "https://www.deckofcardsapi.com/api/deck/new/draw/?count=2"
    );
    // console.log("Response: ", response);

    if (response.ok) {
      const data =
        await response.json(); /* .json() in order to get the actual data */
      console.log(data.cards);
      const cards = data.cards;
      let cardSet = ""; /* will be overwritten */

      cards.forEach((card) => {
        cardSet += `<img src=${card.image} alt="Card"/>`;
      });
      console.log(cardSet);

      cardsDisplay.innerHTML = cardSet;
    }
  } catch (error) {
    console.log(error);
  }
}

const play = Button("Play", handleGetCards);
const cardsDisplay = CardsDisplay();

main.append(cardsDisplay, play);
