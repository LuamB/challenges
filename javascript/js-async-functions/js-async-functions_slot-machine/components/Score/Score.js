function getScoreFromLocalStorage() {
  const score = localStorage.getItem("score");
  //check
  console.log("Stored Score (string):", score);

  const parsedScore =
    score !== null && !isNaN(parseInt(score, 10)) ? parseInt(score, 10) : 0;
  console.log("Parsed Score (integer):", parsedScore);

  return parsedScore;

  // return score ? parseInt(score, 10) : 0;
}

function setScoreInLocalStorage(score) {
  localStorage.setItem("score", score);
}

export function Score() {
  const scoreElement = document.createElement("div");
  scoreElement.classList.add("score");

  function render() {
    scoreElement.innerHTML = /* html */ `
			<span class="score__label">Score:</span>
      <span class="score__value">${getScoreFromLocalStorage()}</span>
		`;
  }

  render();

  function addPoints(points) {
    setScoreInLocalStorage(Math.max(0, getScoreFromLocalStorage() + points));
    // console.log("Stored Score:", localStorage.getItem("score")); // check
    render();
  }

  scoreElement.addPoints = addPoints;

  return scoreElement;
}
