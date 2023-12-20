const recipes = [
  {
    title: "Crepes",
    duration: 60,
    ingredients: ["butter", "flour", "eggs", "milk", "salt"],
    servings: 3,
  },
  {
    title: "Scrambled Eggs",
    duration: 20,
    ingredients: ["eggs", "milk", "salt"],
    servings: 2,
  },
  {
    title: "Vegan Salmon",
    duration: 60 * 24 * 3, // 3 days
    ingredients: [
      "carrots",
      "olive oil",
      "nori sheets",
      "liquid smoke",
      "soy sauce",
    ],
    servings: 10,
  },
  {
    title: "Carrot Cake",
    duration: 120,
    ingredients: ["carrots", "flour", "eggs", "salt", "milk", "sugar"],
    servings: 10,
  },
];

/* 1: `map` exercises */

const onlyTitles = recipes.map((recipe) => {
  return recipe.title;
}); // ['Crepes', ...]
console.log("onlyTitles", onlyTitles);

const titlesWithDuration = recipes.map((recipe) => {
  return `${recipe.title} (${recipe.duration})min`;
}); // ['Crepes (60min)', ...]
console.log("titlesWithDuration: ", titlesWithDuration);

const timePerServing = recipes.map((recipe) => {
  return recipe.duration / recipe.servings;
}); // [20, 10, 432, 12]
console.log("timePerServing: ", timePerServing);
// EXTRA:

// HINT: use first map() and then Array.prototype.join() with "method chaining" like so:
// myArray.map(...).join(', ');

// const allTitlesInOneString = onlyTitles.join(", "); // 'Crepes, Scrambled Eggs, ...'

const allTitlesInOneString = recipes
  .map((recipe) => {
    return recipe.title;
  })
  .join(", ");
console.log("allTitlesInOneString: ", allTitlesInOneString);

/* 2: `filter` exercises */

const recipesThatOnlyTake60minutesOrLess = recipes.filter((recipe) => {
  return recipe.duration <= 60;
});
console.log("60 Min or less:", recipesThatOnlyTake60minutesOrLess);

const allRecipesWithMoreThan2Servings = recipes.filter((recipe) => {
  return recipe.servings > 2;
});
console.log("More than 2 servings: ", allRecipesWithMoreThan2Servings);

const allRecipesWithTitlesLongerThan12Characters = recipes.filter((recipe) => {
  return recipe.title.length > 12;
});
console.log(
  "Title longer than 12 char: ",
  allRecipesWithTitlesLongerThan12Characters
);

export {
  onlyTitles,
  titlesWithDuration,
  timePerServing,
  allTitlesInOneString,
  recipesThatOnlyTake60minutesOrLess,
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
};
