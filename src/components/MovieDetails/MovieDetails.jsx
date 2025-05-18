import css from './MovieDetails.module.css';

export default function MovieDetails({ movieInfo }) {
  const genres = movieInfo.genres.map(genre => genre.name).join(', ');
  return (
    <div className={css.container}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
        alt={`There should have been a poster ${movieInfo.title}, but we don't have one:(`}
        width="250"
        height="375"
      />
      <ul className={css.detalsList}>
        <li>
          <h2>{movieInfo.title}</h2>
        </li>
        <li>
          <p>User score: {Math.round(movieInfo.vote_average * 10)}%</p>
        </li>
        <li>
          <h3>Overview: </h3>
          <p>{movieInfo.overview}</p>
        </li>
        <li>
          <h3>Genres:</h3>
          <p> {genres}</p>
        </li>
      </ul>
    </div>
  );
}