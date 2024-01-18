import React, { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  // initialize count state
  const [count, setCount] = useState(0);
  
  // function to increment the count
  const increment = () => {
    setCount((c) => c + 1);
  };

  // function to decrement the count
  const decrement = () => {
    setCount((c) => c - 1);
  };

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={increment}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
}
