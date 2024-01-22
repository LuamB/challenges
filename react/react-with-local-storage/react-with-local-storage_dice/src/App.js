import { D6Button } from "./components/D6Button";
import { getD6Roll } from "./utils.js";
import History from "./components/History";
import useLocalStorageState from "use-local-storage-state";
// import { useState } from "react";
import "./styles.css";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("", { defaultValue: [] });
  console.log("rolls : ", rolls);

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };

  return (
    <div className="app">
      <main className="app__main">
        <D6Button onRoll={handleRoll} value={rolls} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}

//[currentRollValue, ...rolls]
