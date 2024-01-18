import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from "./components/Header";
import EntriesForm from "./components/EntriesForm";
import EntriesSection from "./components/EntriesSection";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <EntriesForm />
      <EntriesSection />
      <Footer />
    </>
  );
}

export default App;
