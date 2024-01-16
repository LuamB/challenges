import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button text="Click me!"/>
      <Button text="Click me not!"/>
      <Button text="Click me!"/>
      <Button text="Click me not!"/>
    </main>
  );
}

function Button({text}) {
  return (
    <button className="button" type="button">
      {text}
    </button>
  );
}
