import React from "react";
import "./styles.css";


const greeting = "Hello World!";

export default function App() {
  // return <div>Say hello...</div>;
  // return <h1>{greeting}</h1>;
  return HelloWorld();
}

export function HelloWorld() {
  return <h1>{greeting}</h1>;
}
