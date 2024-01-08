console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// new section
const newPost = document.createElement("section");
newPost.classList.add("post");

// new p
const newP = document.createElement("p");
newP.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newP.classList.add("post__content");

// new footer
const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");

// new span
const newSpan = document.createElement("span");
newSpan.classList.add("post__username");

// new button
const newLikeButton = document.createElement("button");
newLikeButton.classList.add("post__button");
newLikeButton.setAttribute("type", "button");
newLikeButton.setAttribute("data-js", "like-button");
newLikeButton.textContent = "♥ Like";
newLikeButton.addEventListener("click", (event) => {
  handleLikeButtonClick(event);
});

// append elements to section
newPost.appendChild(newP);
newPost.appendChild(newFooter);
newPost.appendChild(newSpan);
newPost.appendChild(newLikeButton);

// append section to body
document.body.append(newPost);

// event listener button
