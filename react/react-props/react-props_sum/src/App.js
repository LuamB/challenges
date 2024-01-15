import React from "react";
import "./styles.css";

export default function App() {
  // return <h1>Replace me with your component!</h1>;
  return <Sum valueA={2} valueB={3} />;
}

const Sum = ({ valueA, valueB }) => {
  const result = valueA + valueB;
  return (
    <h1>
      {valueA} + {valueB} = {result}
    </h1>
  );
};
