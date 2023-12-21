//Calculate circle area and circumference

const circleRadius = 5;
const circleArea = Math.PI * Math.pow(circleRadius, 2);
const circumference = 2 * Math.PI * circleRadius;

// console.log("circelArea: ", circleArea);
// console.log("circumference: ", circumference);

console.log(
  `For a circle with a radius of 5 units:

-   The area is approximately ` +
    circleArea.toFixed(2) +
    ` square units.
-   The circumference is approximately ` +
    circumference.toFixed(2) +
    ` units.`
);
