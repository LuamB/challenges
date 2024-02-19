console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => {
  return card.id === "2";
});
// // Javier's more elegant solution
// const onlyCardWithIdTwo = cards.filter(card => card.id === "2");
console.log("Card with id = 2", onlyCardWithIdTwo);

const allCardsWith3Tags = cards.filter((card) => {
  return card.tags.length == 3;
});
// // Javier's more elegant solution
// const allCardsWith3Tags = cards.filter(card => card.tags.length === 3);
console.log("Cards with 3 tags", allCardsWith3Tags);

// const allCardsThatAreNotBookmarked = cards.filter((card) => {
//   return !card.isBookmarked;
// });
// My more elegant solution
const allCardsThatAreNotBookmarked = cards.filter((card) => !card.isBookmarked);
console.log("Cards not bookmarked", allCardsThatAreNotBookmarked);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  return (card.tags == "html" || "js") && card.isBookmarked;
});
console.log(
  "Cards with html or js tags and bookmarked",
  allCardsWithTagsHTMLOrJSThatAreBookmarked
);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
