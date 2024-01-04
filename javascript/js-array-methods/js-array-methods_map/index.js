console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
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
    tags: ["js", "next", "advanced"],
  },
];

// const lowerCaseAnswers = cards.map((card) => {
//   const answer = card.answer;
//   return answer.toLowerCase();
// }); // ["As often as you like, ..."]
// Javier's more elegant solution
const lowerCaseAnswers = cards.map((card) => card.answer.toLowerCase());

console.log("lowerCaseAnswers", lowerCaseAnswers);

// const questionsAndAnswersTogether = cards.map((card) => {
//   const question = card.question;
//   const answer = card.answer;
//   return `${question} - ${answer}`;
// }); // ["How often can I use <header>? - As often as you like.", ...]
// Javier's more elegant solution
const questionsAndAnswersTogether = cards.map(
  (card) => `${card.question} - ${card.answer}`
);
console.log("Q&A's together", questionsAndAnswersTogether);

// const questionAndAnswer = cards.map((card) => {
//   return {
//     question: card.question,
//     answer: card.answer,
//   };
// }); // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]
// Javier's more elegant solution
const questionAndAnswer = cards.map(({ question, answer }) => ({
  question,
  answer,
}));
console.log("Q&A", questionAndAnswer);

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
