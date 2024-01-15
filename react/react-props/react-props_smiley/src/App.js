import React from "react";
import "./styles.css";

export default function App() {
  // return <h1>Replace me with your component!</h1>;
  return <Smiley isHappy={false} />; //<- switch between true and false, here
}

const Smiley = ({ isHappy }) => {
  const happy = "😃";
  const unhappy = "😔";
  return <h1>{isHappy ? happy : unhappy}</h1>;
};
