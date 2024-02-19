function getScoreFromLocalStorage() {
  const score = localStorage.getItem("score");
  // setScoreInLocalStorage(0); // Set the score to zero unconditionally
  return score ? parseInt(score, 10) : 0;
}

function setScoreInLocalStorage(score) {
  localStorage.setItem("score", score);
}

export function Score() {
  const scoreElement = document.createElement("div");
  scoreElement.classList.add("score");

  function render() {
    // Check if the page is being loaded for the first time
    const isFirstLoad = !localStorage.getItem("score");
    if (isFirstLoad) {
      // If it's the first load, set the score to 0
      setScoreInLocalStorage(0);
    }

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

  // function addPoints(points) {
  //   // Set score to 0 when the page is refreshed
  //   const currentScore = getScoreFromLocalStorage();
  //   const newScore = Math.max(0, currentScore + points);
  //   setScoreInLocalStorage(newScore);
  //   render();
  // }

  scoreElement.addPoints = addPoints;

  return scoreElement;
}
