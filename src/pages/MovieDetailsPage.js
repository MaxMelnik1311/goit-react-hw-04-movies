import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import T from 'prop-types';
import MovieDetails from '../components/MovieDetails';
import routes from '../routes';
import { getMovieInfo } from '../utils/moviesAPI';
import MovieCastPage from './MovieCastPage';
import MovieReviewPage from './MovieReviewPage';
import Loading from '../components/Loading/Loading';

class MovieDetailsPage extends Component {
  state = {
    movieInfo: '',
    error: '',
    loading: false,
  };

  propTypes = {
    match: T.shape.isRequired,
    location: T.shape.isRequired,
    history: T.shape.isRequired,
  };

  componentDidMount() {
    this.setState({ loading: true });
    const { movieId } = this.props.match.params;
    getMovieInfo(movieId)
      .then(items => this.setState({ movieInfo: items }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    this.props.history.push(routes.MoviesPage);
  };

  render() {
    const { movieInfo, error, loading } = this.state;
    const {
      overview,
      poster_path,
      release_date,
      genres,
    } = this.state.movieInfo;
    return (
      <>
        {error && (
          <h1>Man, something wrong happened in fetching movie details</h1>
        )}
        {loading && <Loading />}
        {movieInfo && (
          <>
            <button type="button" onClick={this.handleGoBack}>
              Go back
            </button>
            <br />
            <MovieDetails
              overview={overview}
              poster_path={poster_path}
              release_date={release_date}
              genres={genres}
            />
            <ul>
              <li>
                <Link
                  to={{
                    pathname: `${this.props.match.url}/cast`,
                    state: { from: this.props.location },
                  }}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: `${this.props.match.url}/reviews`,
                    state: { from: this.props.location },
                  }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
            <Route path={routes.Reviews} component={MovieReviewPage} />
            <Route path={routes.Cast} component={MovieCastPage} />
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
