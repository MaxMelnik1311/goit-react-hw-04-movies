import React from 'react';
import PropTypes from 'prop-types';

function MovieDetails({ title, overview, poster_path, release_date, genres }) {
  const imgUrl = 'https://image.tmdb.org/t/p/w300/';
  return (
    <>
      <div>
        <h4>{overview}</h4>
        <img src={`${imgUrl}${poster_path}`} alt={overview} />
        <h2>{title}</h2>
        <p>{release_date}</p>
        {genres.map(genre => (
          <span key={genre.name}>{genre.name} </span>
        ))}
      </div>
    </>
  );
}

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default MovieDetails;
