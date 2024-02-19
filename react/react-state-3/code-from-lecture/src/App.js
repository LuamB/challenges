import { useState } from "react";
import { uid } from 'uid';
import "./styles.css";
import Movie from "./components/Movie/index.js";
import Form from "./components/Form";

const initialMovieData = [
  {
    id: "28djdh72",
    name: "The Incredible Hulk",
    isLiked: false,
  },
  {
    id: "dknseu2",
    name: "Spiderman 1-25",
    isLiked: false,
  },
  {
    id: "dkwi02ksk",
    name: "Lord of the Rings",
    isLiked: true,
  },
];

export default function App() {
  const [movies, setMovies] = useState(initialMovieData);

  function addMovie(newMovie) {
    // console.log(newMovie)
    // const id = uid()
    // console.log(id)
    setMovies([...movies, {...newMovie, id: uid()}])
  }

  function handleDeleteMovie(id) {
    const filtered = movies.filter(movie => movie.id !== id)
    setMovies(filtered)
  }

  function handleToggleLike(id) {
    // console.log('toggle like')
    setMovies(
      movies.map(movie => movie.id === id ? {...movie, isLiked: !movie.isLiked} : movie)
    )
  }

  return (
    <div className="app">
      <h1>Favorite Movies</h1>
      <ul className="list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Movie id={movie.id} name={movie.name} isLiked={movie.isLiked} onDeleteMovie={handleDeleteMovie} onToggleLike={ handleToggleLike}/>
          </li>
        ))}
      </ul>
      <Form onAddMovie={addMovie}/>
    </div>
  );
}
