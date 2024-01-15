import "./styles.css";

import Pet from "./components/Pet";

export default function App() {
  function handleAnimal(name,sound){
    console.log(`Hello ${name}, said ${sound}`);
  }


  return (
    <div>
      <Pet sound="Meow" name="Cat" emoji="🐈" onHandleAnimal={handleAnimal} isHungry/>
      <Pet sound="Woof" name="Dog" emoji="🐶" onHandleAnimal={handleAnimal}/>
      <Pet sound="Squeak" name="Mouse" emoji="🐭" onHandleAnimal={handleAnimal} isHungry/>
    </div>
  );
}

{/* <div className="animal">
        Meow
        <span role="img" aria-label="A cat">
          🐈
        </span>
      </div>
      <div className="animal">
        Woof
        <span role="img" aria-label="A dog">
          🐕
        </span>
      </div>
      <div className="animal">
        Squeak
        <span role="img" aria-label="A mouse">
          🐁
        </span>
      </div> */}
