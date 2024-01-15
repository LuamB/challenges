import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";
// This is the dom element that react will render into,
// per convention, it is usually a div with an id of "root".
const rootElement = document.querySelector("#root");

// This is the react way to create a "root" that react can render into.
const root = createRoot(rootElement);

// Call render on the root to render the elements into the DOM.
// Notice that this is NOT a template literal, it is JSX.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  //   <div>
  //     <Greeting />
  //     {/* <h1 id="greeting">Hello {name ? name : "stranger"}</h1> */}
  //     <p className="intro">
  //       I am rendered by <strong>{name}</strong>
  //     </p>
  //   </div>
);

// const helloWorld = document.createElement("h1")
// helloWorld.textContent = "Hello World"
// rootElement.append(helloWorld)
