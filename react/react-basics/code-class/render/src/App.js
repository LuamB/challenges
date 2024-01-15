import Greeting from "./Components/Greeting";
export default function App() {
  //   function Greeting() {
  //     const name = "";
  //     return <h1 id="greeting">Hello {name ? name : "stranger"}</h1>;
  //   }

  return (
    <div>
      <Greeting />
      {/* <h1 id="greeting">Hello {name ? name : "stranger"}</h1> */}
      <p className="intro">
        I am rendered by <strong>React</strong>
      </p>
    </div>
  );
}
