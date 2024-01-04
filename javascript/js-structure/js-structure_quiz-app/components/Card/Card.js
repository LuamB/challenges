import cards from "../../cards.js";

export default function Card(props) {
  const card = document.createElement("article");
  card.classList.add("card");
  card.innerHTML = /* html */ `
          <h2 class="card__question" data-js="question"></h2>
          <button class="card__button-answer" type="button" data-js="answer-button">
              Show answer
          </button>
          <p class="card__answer" data-js="answer"></p>
          <ul class="card__tag-list" data-js="tags"></ul>
          <div class="card__button-bookmark" data-js="bookmark-button-wrapper"></div>
      `;

  const question = card.querySelector('[data-js="question"]');
  const answerButton = card.querySelector('[data-js="answer-button"]');
  const answer = card.querySelector('[data-js="answer"]');
  const tags = card.querySelector('[data-js="tags"]');
  const bookmarkButtonWrapper = card.querySelector(
    '[data-js="bookmark-button-wrapper"]'
  );

  question.textContent = props.question;
  answer.textContent = props.answer;

  props.tags.forEach((tag) => {
    const tagElement = document.createElement("li");
    tagElement.classList.add("card__tag");
    tagElement.textContent = "#" + tag;
    tags.append(tagElement);
  });

  function handleBookmarkButtonClick(event) {
    cards.find((card) => card.question === props.question).isBookmarked =
      !props.isBookmarked;
    // To prevent the need to rerender, we can just toggle the class here
    event.currentTarget.classList.toggle("bookmark--active");
  }

  const bookmarkButton = Bookmark({
    active: props.isBookmarked,
    onClick: handleBookmarkButtonClick,
  });
  bookmarkButtonWrapper.append(bookmarkButton);

  function handleAnswerButtonClick() {
    answer.classList.toggle("card__answer--active");
  }

  answerButton.addEventListener("click", handleAnswerButtonClick);

  return card;
}

function Bookmark(props) {
  const bookmark = document.createElement("button");
  bookmark.classList.add("bookmark");

  if (props.active) {
    bookmark.classList.add("bookmark--active");
  }

  bookmark.type = "button";
  bookmark.setAttribute("aria-label", "bookmark");
  bookmark.innerHTML = /* html */ `
          <svg
              class="bookmark__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewbox="0 0 24 24"
          >
              <path
                  d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
              />
          </svg>
      `;

  bookmark.addEventListener("click", props.onClick);

  return bookmark;
}
