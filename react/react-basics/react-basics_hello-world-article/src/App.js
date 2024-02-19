import React from "react";
import "./styles.css";

export default function App() {
  // return <div>Replace me with your Component!</div>;
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  const title = "Hello World!";
  const text = "Let's welcome the new week together 🤗";
  const element = (
    <article>
      <h1>{title}</h1>
      <p>{text}</p>
    </article>
  );
  return element;
}
