# Challenges: JS Callback Functions

The following four exercises build on each other. The first three challenges let you exercise how to write callback functions.

If the names used for functions seem unclear at the beginning (e.g. `onSuccess()` instead of `callback()`), the fourth exercise will clear everything up.

## Named vs. anonymous callback functions

(difficulty: 🌶️)

Solve the _Named vs. anonymous callback functions_ challenge by running this command in your Terminal:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/js-callback-functions/user-login-callback-1-named-vs-anonymous
```

## Callback functions with one argument

(difficulty: 🌶️🌶️)

Solve the _Callback functions with one argument_ challenge by running this command in your Terminal:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/js-callback-functions/user-login-callback-2-with-argument
```

## Callback functions with multiple arguments

(difficulty: 🌶️🌶️)

Solve the _Callback functions with multiple arguments_ challenge by running this command in your Terminal:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/js-callback-functions/user-login-callback-3-with-multiple-arguments
```

## Multiple callback functions

(difficulty: 🌶️🌶️)

Solve the _Multiple callback functions_ challenge by running this command in your Terminal:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/js-callback-functions/user-login-callback-4-with-multiple-functions
```

<details>
<summary><strong>🌶️🌶️🌶️ Super hot challenges 🌶️🌶️🌶️</strong></summary>

## Calculating the Total Price

You have an array of products with prices, and you want to calculate the total price of all products using a callback function.

1. Create a function called `calculateTotalPrice` that takes two parameters `products` (an array of products) and `extractPrice` (a callback function).
2. Inside the `calculateTotalPrice` function, initialize a variable `totalPrice` to keep track of the total price and set its initial value to `0`.
3. Use a loop, such as a `for...of` loop, to iterate through the array of products.
4. In each iteration of the loop, call the provided callback function with the current product as an argument to extract its price.
5. Add the extracted price to the `totalPrice` variable in each iteration of the loop.
6. After looping through all the products, return the total price as the result of the `calculateTotalPrice` function.
7. Create the callback function `extractPrice`, which should take a product as input and return its price.
8. Use the `calculateTotalPrice` function with the array of products and the callback function to calculate the total price.

You can use the following array of spices as a test case:

```js
const products = [
  { name: "Saffron", price: 50 },
  { name: "Cinnamon", price: 6 },
  { name: "Cardamom", price: 12 },
  { name: "Turmeric", price: 9 },
  { name: "Paprika", price: 4 },
  { name: "Garam Masala", price: 10 },
  { name: "Vanilla Bean", price: 15 },
  { name: "Coriander", price: 6 },
];
```

<details>
<summary>💡 Hint</summary>

```js
function calculateTotalPrice(products, extractPrice) {
  // Your logic goes here
}

function extractPrice(product) {
  return product.price;
}

const totalPrice = calculateTotalPrice(products, extractPrice);
console.log(totalPrice); // Output should be 112
```

</details>

## Creating a Custom Map Function

Create a custom `myMap` function that takes an array and a callback function as parameters. It should apply the callback function to each element in the array, double each number, and return a new array containing the doubled numbers.

1. Create a function named `myMap` that takes two parameters: an array of numbers `numbers` and a callback function `double`.
2. Inside the `myMap` function, initialize an empty array to store the results.
3. Use a loop, such as a `for` loop, to iterate through the elements of the input array.
4. In each iteration of the loop, call the provided callback function with the current element as an argument to double the number.
5. Store the doubled result in the new array created in step 2.
6. After processing all elements, return the new array containing the doubled numbers.
7. Create a callback function `double`, that doubles a given number. This function should take an element as input and return the doubled value.
8. Use the `myMap` function with the array of numbers and the `double` callback function to create a new array containing the doubled numbers.

You can use the following array as a test case:

```js
const numbers = [1, 2, 3, 4, 5];
```

<details>
<summary>💡 Hint</summary>

```js
function myMap(numbers, double) {
  // Your logic goes here
}

function double(number) {
  return number * 2;
}

const doubledNumbers = myMap(numbers, double);
console.log(doubledNumbers); // Output should be [2, 4, 6, 8, 10]
```

</details>

</details>
