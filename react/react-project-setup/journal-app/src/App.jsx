// import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import EntriesForm from "./components/EntriesForm/EntriesForm.jsx";
// import EntriesSection from "./components/EntriesSection/EntriesSection.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="app">
      <Header />
      <main className="app_main">
        <EntriesForm />
      </main>
      <Footer />
    </div>
  );
}

{
  /* <main className="app_main">
        <EntriesForm />
        <EntriesSection />
      </main>
      */
}

export default App;
