console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--

const title = "Learning Javascript";
const author = "Brendan Eich";
let rating = 5;
let numberOfSales = 222333455;

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/
numberOfSales++

rating = 10
logBookData()
// --v-- write your code here --v--

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

numberOfSales++
logBookData()

numberOfSales++
logBookData()

function logBookData() {
  console.log(title, author, rating, numberOfSales)
}

// --v-- write your code here --v--
// function getBookData() {
//   console.log(title + " ," + author + " ," + rating + " , " + numberOfSales);
// }

// getBookData();
// rating = 4.8;
// numberOfSales = numberOfSales + 5000;
// getBookData();
// --^-- write your code here --^--

