console.clear();

function handleLikeButtonClick(event) {
    const buttonElement = event.target;
    buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const post = document.createElement("article");
post.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const postUsername = document.createElement("span");
postUsername.classList.add("post__username");
postUsername.textContent = "@username";

const postButton = document.createElement("button");
postButton.classList.add("post__button");
postButton.setAttribute("type", "button");
postButton.addEventListener("click", handleLikeButtonClick);
postButton.textContent = "♥ Like";

postFooter.append(postUsername, postButton);
post.append(postContent, postFooter);
document.body.append(post);
