import './MovieCard.css';

export default function Card({movie}){
    return( <section className='movie-card'>
    <h2 className='movie-card__title'>
        {movie.title}
        <span className='movie-card__rating'>
            {movie.imdbRating} IMDb
        </span>
    </h2>
    <span className='movie-card__director'>by {movie.director}</span>
    <img
        className='movie-card__image'
        src={movie.url}
        alt={`${movie.title} `}
    ></img>
    <div className='movie-card__content'>
        <p className='movie-card__description'>{movie.description}</p>
    </div>
</section>);
}