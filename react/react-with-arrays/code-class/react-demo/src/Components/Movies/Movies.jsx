import React from "react";
import "./Movies.css";
import Card from "../MovieCard/Card";

import { movies } from "../../Data/movies";

export default function Movies() {
  console.log("Movies: ", movies);
  return (
    <main className="movies">
      <h1 className="movies__title">Some great movies</h1>
      {movies && movies.map((element)=> <Card title={element.title}/>)}
    </main>
  );
}