# Express Basics

## Learning objectives

- Basic familiarity with writing a server application
- Node vs. Express
- Why use Express?
- How to build a basic server with Express

---

## Background

- We'll learn Next.js in the coming days, which allows us to run server-side logic but not in the traditional pure server paradigm. It's important to get a little familiarity with how to build your own server.

## Review: Important terms

### What is a Server?

- A server is an application that listens for incoming requests.
- It examines each request, and responds according to the rules it was programmed with.
- We use servers all the time, but these are built by other people.
- Today we'll build our own.

### What is Node JS?

- Remember that Node JS is a JavaScript engine that runs on your computer.
- It's quite similar to the JavaScript that we use for the browser.
- However, it includes a lot of modules and logic for handling things that are relevant to servers.
- This includes running processes, listening to incoming requests, sending responses, reading and writing files, and much more.
- These capabilities are not found in the JavaScript we use in the browser.
- Today we'll be using the famous and popular Express library.
- It gives us some convenient and helpful ways to create a server web application.
- But it's important to know that all of this functionality can be done, albeit with more coding work, with plain, vanilla Node JS.

## Creating an Express app

- You can create an Express app by installing the `express` package into a Node app.
- Create an app from scratch using `npm init`
- **NB** be sure to add `"type": "module"`, otherwise `import` and `export` won't work!
- Add Express as a dependency, by running `npm install express`
- The `package.json` should now reflect that Express has been installed.
- You would probably want to add `eslint` and `prettier` to help you with linting and formatting your code.
- Add the following files:

### .prettierrc.json

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": false,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "jsxBracketSameLine": false,
  "arrowParens": "always",
  "requirePragma": false,
  "insertPragma": false,
  "proseWrap": "preserve",
  "htmlWhitespaceSensitivity": "css",
  "vueIndentScriptAndStyle": false,
  "endOfLine": "lf",
  "embeddedLanguageFormatting": "auto",
  "singleAttributePerLine": false
}
```

### .eslintrc.json

```json
{
  "extends": ["eslint:recommended"],
  "root": true
}
```

## A. Skeleton of a basic Express server

```javascript
// index.js
import express from "express";

// Reads the PORT value from the environment variable `PORT`.
// If not found, uses the default value of 3000.
const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
```

### What does this do?

- We create a new Express app/instance with `express()`
- We tell it to listen for requests on the computer's port 3000.
- Any output will be logged to the terminal where we started the app!

### Run the app

```bash
node index.js # or simply `node .`
```

### Improvement: use `nodemon`

- It gets **tedious** to keep restarting our app after our code changes.
- Instead, we can use `nodemon`, an app which **monitors** our code for changes.
- When it detects a change, it will restart the application.
- To install it in your app (dev dependency): `npm install --save-dev nodemon`
- Add a **script** in your `package.json` named `dev`: `nodemon .`
- Now you can start your app by running `npm run dev`.

## B. Example route: `GET /` - root route, returning text

- This tells the server to respond to a specific request for the **root** route
- It sends a plain text response -- this is **not** HTML!

```javascript
app.get("/", (request, response) => {
  // Logged in the terminal on the SERVER side
  console.log("Someone wants the root route!");
  // Sent to the client (visible in the browser window)
  response.send("Welcome to our site! 😎");
});
```

## C. Example route: `GET /contact` - returning HTML

- Build an HTML page for the contact form.
- Remember the important rules we discussed earlier on about forms in HTML!

```html
<!-- contact-form.html -->
<!-- ... -->
<h1>Contact Us</h1>
<form method="post">
  <div>
    <label for="message">Message: </label>
    <input type="text" name="message" id="message" />
  </div>
  <div>
    <button type="submit">Send</button>
  </div>
</form>
<!-- ... -->
```

```javascript
// index.js

// ...
app.get("/contact", function (req, res) {
  console.log("serving contact.html...");
  res.sendFile(path.join(__dirname, "/contact-form.html"));
});
```

## D. Example route: `GET /staff` returning JSON

- We can also respond with data in other formats, eg. JSON.
- As a convenience, we might use `.json` in the route's path. But it's not actually needed! It just helps our users make sense of how to use our server.

```javascript
// index.js

// ...
const staff = ["Sally", "Bob", "Mike", "Rachel", "Andy", "Greg"];

app.get("/staff", (req, res) => {
  res.json({
    people: staff,
  });
});
```

- Test it in the browser.
- You should get the JSON data returned. Note that it will also be sent with the correct data type header!

## E. Example route: `GET /staff/:name` with a variable/parameter

- Instead of creating many routes for exact paths, we could create a route with a **variable part**: a **placeholder** for any value!
- This saves us the difficulty of maintaining many specific routes

```javascript
app.get("/staff/:person", (req, res) => {
  // Get the actual value sent for the parameter from `req.params`
  const name = req.params.person;
  res.json({
    name: name,
    description: `${name} is a valued employee here are our company!`,
  });
});
```

- We should do **data validation**, checking that the input we received is actually valid.
- This is a larger topic, but a start here would be to first **search** for the name in our 'database' (array of names)
- If none is found, we could always respond with a `404`:

```javascript
// index.js

// ...
// Responds with a status code of 404, and a given JSON body
res.status(404).json({
  error: "Staff member not found",
});
```

## F. Example route: `POST /contact` - receive the contact form, redirect to `/`

- To **parse** the JSON we expect to receive as the body of this request, we'll use some **Express middleware**.
- In Express, middleware is a piece of logic that we can 'plug in' to the Express request-handling chain.
- Typically, middleware functions will modify or check the request, and they might also short-circuit the request handling and send a response sooner.
- (Here we are working with a JSON body. There are other ways to work with a pure HTML form body, but we won't cover them here)

```javascript
// index.js

app.use(express.json());

// ...

app.post("/contact", function (req, res) {
  console.log("We got a message! Somebody wrote:", req.body.message);
  // We don't want to show a specific page here;
  // Instead, let's redirect to the home page.
  res.redirect("/");
});
```

- Test this **using a REST client**. Be sure to send JSON as the request body!
- We would usually accomplish this with some JavaScript in the client:
  - Handling the submit event on the form
  - Preventing the default event behavior
  - Preparing a JSON object with the data that the user input in the form
  - Sending this JSON data in a new POST request to the server.
- You should see the message printed in the terminal.

### Summary

- We looked at Express as a library to help us build server apps in NodeJS
- We built a few routes
- We experimented with sending back responses to the client
- We found ways to send text, files, and JSON data
- We handled form data submitted by the client

## Resources

- [nodemon](https://nodemon.io/)
- [Express home-page](http://expressjs.com/)
- [Learn Express and Node](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs) at [Mozilla Developers Network (MDN)](https://developer.mozilla.org/)
- [Routing in Express](http://expressjs.com/en/guide/routing.html)
- [Using Middleware in Express](http://expressjs.com/en/guide/using-middleware.html)
