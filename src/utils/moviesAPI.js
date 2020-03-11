const baseUrl = 'https://api.themoviedb.org/3/';
const APIkey = '12e75ee9cf52121616110ffd974c7532';

function getPopularMovies() {
  return fetch(
    `${baseUrl}discover/movie?sort_by=popularity.desc&api_key=${APIkey}`,
  ).then(response => response.json());
}

function getMoviesByQuery(query) {
  return fetch(
    `${baseUrl}search/movie?api_key=${APIkey}&language=en-US&query=${query}`,
  ).then(response => response.json());
}

function getMovieInfo(id) {
  return fetch(`${baseUrl}movie/${id}?api_key=${APIkey}`).then(response =>
    response.json(),
  );
}

function getMovieCast(id) {
  return fetch(`${baseUrl}movie/${id}/credits?api_key=${APIkey}`).then(
    response => response.json(),
  );
}

function getMovieReviews(id) {
  return fetch(`${baseUrl}movie/${id}/reviews?api_key=${APIkey}`).then(
    response => response.json(),
  );
}

export {
  getPopularMovies,
  getMoviesByQuery,
  getMovieInfo,
  getMovieCast,
  getMovieReviews,
};
