import { D6Button } from "./components/D6Button";
import { getD6Roll } from "./utils.js";
import History from "./components/History";
// import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [rolls, setRolls] = useState([]);

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };

  const currentRollValue = rolls[0]?.value;

  return (
    <div className="app">
      <main className="app__main">
        <D6Button onRoll={handleRoll} value={currentRollValue} />
      </main>
      <aside className="app__aside">
        <History rolls={setRolls([currentRollValue, ...rolls])} />
      </aside>
    </div>
  );
}
