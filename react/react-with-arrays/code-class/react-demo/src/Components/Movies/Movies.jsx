import React from 'react';
import './Movies.css';

import Card from '../MovieCard/Card';

import { movies } from '../../Data/movies';

export default function Movies() {
    console.log('Movies: ', movies);
    return (
        <main className='movies'>
            <h1 className='movies__title'>Some great movies</h1>
            {/* I want here to display my cards. */}
            {/* If I use the {} in my arrow function I need the return */}
            {movies &&
                movies.map((element) => {
                    return <Card movie={element} key={element.id} />;
                })}
        </main>
    );
}
