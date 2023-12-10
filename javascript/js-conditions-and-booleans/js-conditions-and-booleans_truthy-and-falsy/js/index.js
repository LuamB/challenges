// const truthyOrFalsy = Boolean(3 >= 2);
// console.log("The expression is " + truthyOrFalsy);

let truthyOrFalsy = Boolean(2 == "2");
console.log("Expression is ", truthyOrFalsy);

truthyOrFalsy = Boolean(2 === "2");
console.log("Expression is ", truthyOrFalsy);

truthyOrFalsy = Boolean(2 === 2);
console.log("Expression is ", truthyOrFalsy);

truthyOrFalsy = Boolean("hello world");
console.log("Expression is", truthyOrFalsy);

truthyOrFalsy = Boolean("");
console.log("Expression is", truthyOrFalsy);

truthyOrFalsy = Boolean(true);
console.log("Expression is", truthyOrFalsy);

truthyOrFalsy = Boolean(0);
console.log("Expression is", truthyOrFalsy);

truthyOrFalsy = Boolean(-50);
console.log("Expression is", truthyOrFalsy);

truthyOrFalsy = Boolean(50);
console.log("Expression is", truthyOrFalsy);

truthyOrFalsy = Boolean(5 > 1);
console.log("Expression is", truthyOrFalsy);

truthyOrFalsy = Boolean("1 > 10");
console.log("Expression is", truthyOrFalsy);
