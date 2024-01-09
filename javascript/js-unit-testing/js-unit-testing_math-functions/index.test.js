import { add, subtract, multiply, divide } from "./index.js";

/* 
add()
• returns 5 if called with add(2, 3)
• returns a negative value if the greater argument is negative (Hint: use the matcher toBeLessThan())
• returns a value close to 0.3 if called with add(0.1, 0.2) (Hint: use the matcher toBeCloseTo())
*/
test("returns 5 when calling add(2,3)", () => {
  expect(add(2, 3)).toBe(5);
});

test("returns negative value if greater argument is negative", () => {
  expect(add(2, -3)).toBeLessThan(0);
});

test("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});

/*
subtract()
• returns 10 if called with subtract(15, 5)
• returns a negative value if the second argument is greater than the first one (use toBeLessThan() again)
*/

test("returns 10 if called with subtract(15, 5)", () => {
  expect(subtract(15, 5)).toBe(10);
});

test("returns a negative value if the second argument is greater than the first one", () => {
  expect(subtract(1, 2)).toBeLessThan(0);
});

/*
multiply()
• returns 8 if called with multiply(2, 4)
• returns a negative value if only the first argument is negative
• returns a negative value if only the second argument is negative
• returns a positive value if called with two negative arguments
*/

test("returns 8 if called with multiply(2, 4)", () => {
  expect(multiply(2, 4)).toBe(8);
});

test("returns a negative value if only the first argument is negative", () => {
  expect(multiply(-2, 3)).toBeLessThan(0);
});

test("returns a positive value if called with two negative arguments", () => {
  expect(multiply(-2, -3)).toBeGreaterThan(0);
});

/*
divide()
• returns 3 if called with divide(9, 3)
• returns "You should not do this!" if called with 0 as second argument
*/

test("returns 3 if called with divide(9, 3)", () => {
  expect(divide(9, 3)).toBe(3);
});

test('returns "You should not do this!" if called with 0 as second argument', () => {
  expect(divide(1, 0)).toBe("You should not do this!");
});
