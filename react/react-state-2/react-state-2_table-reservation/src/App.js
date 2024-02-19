import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);
  // handle more people
  function handleIncrement() {
    setPeople(people + 1);
  }
  // handle less people
  function handleDecrement() {
    if (people > 1) {
      setPeople(people - 1);
    }
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} />
      <p>
        You are going to reserve a table for {people}{" "}
        {people === 1 ? "person" : "people"}.
      </p>
    </div>
  );
}
