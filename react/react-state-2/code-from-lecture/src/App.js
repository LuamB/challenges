import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import { useState } from "react";
import "./styles.css";

export default function App() {

  const [searchTerm, setSearchTerm] = useState('') 

  function handleSearch(term) {
    // update the state of 'searchTerm'
    // don't mutate state directly ❌
    // searchTerm = term
    // we use the setter function
    setSearchTerm(term)
  }

  return (
    <main>
      <h1>Search</h1>
      <SearchForm searchTerm={searchTerm} onSearch={handleSearch}/>
      <SearchResults searchTerm={searchTerm}/>
    </main>
  );
}
