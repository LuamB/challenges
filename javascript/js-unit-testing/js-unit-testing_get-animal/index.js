export function getAnimal(arg) {
  // return a string 'I totally love cats!' if called with the argument 'cats'
  if (arg === "cats") {
    return "I totally love cats!";
  }
  // return a string 'I like [animalPluralName]!' if called with a string argument
  if (typeof arg === "string") {
    return `I like ${arg}!`;
  }
  // return a string 'I do not like animals at all!' if called without arguments
  if (!arg) {
    return "I do not like animals at all!";
  }
}
