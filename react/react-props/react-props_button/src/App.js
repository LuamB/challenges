import React from "react";
import "./styles.css";

export default function App() {
  // return <h1>Replace me with your component!</h1>;
  const handleClick = () => {
    console.log("You clicked me!");
  };
  return (
    <Button
      color={"darkgreen"}
      disabled={false}
      text={"Click me!"}
      onClick={handleClick} //enable for 4.
    />
  );
}

// // 1. A simple button component
// const Button = ({ color, disabled, text }) => {
//   return (
//     <button style={{ color: color }} disabled={disabled}>
//       {text}
//     </button>
//   );
// };

// // 2. Adding a Click Event
// const Button = ({ color, disabled, text }) => {
//   return (
//     <button
//       style={{ color: color }}
//       disabled={disabled}
//       onClick={() => console.log("You clicked me")}
//     >
//       {text}
//     </button>
//   );
// };

// // 3. Declare an Event Handler Function
// const Button = ({ color, disabled, text }) => {
//   const handleClick = () => {
//     console.log("You clicked me!");
//   };
//   return (
//     <button style={{ color: color }} disabled={disabled} onClick={handleClick}>
//       {text}
//     </button>
//   );
// };

// 4. Pass a Function as Prop
const Button = ({ color, disabled, text, onClick }) => {
  return (
    <button style={{ color: color }} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};
