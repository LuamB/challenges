import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      const url = `https://pokeapi.co/api/v2/pokemon?offset=${count}&limit=20`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [count]);

  return (
    <main>
      <button type="button" onClick={() => setCount(count - 20)}>
        Previous Page
      </button>
      <button type="button" onClick={() => setCount(count + 20)}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
