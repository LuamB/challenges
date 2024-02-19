import "./styles.css";

export default function App() {
  // return <h1>Replace me with your component!</h1>;
  // change name below and isCoach accordingly
  return <Greeting name="Marcell" isCoach={true} />;
}

// // uncomment to create component with prop name (unconditional)
// const Greeting = ({ name }) => {
//   return <h1>Hello, {name}!</h1>;
// };

// conditional rendering
const Greeting = ({ name, isCoach }) => {
  const coachNames = [
    "Himena",
    "Jan",
    "Klaus",
    "Laya",
    "Marcell",
    "Sven",
    "Yorick",
  ];

  return (
    <h1>
      {
        (isCoach = coachNames.includes(name)
          ? `Hello, Coach!`
          : `Hello, ${name}!`)
      }
    </h1>
  );
};
