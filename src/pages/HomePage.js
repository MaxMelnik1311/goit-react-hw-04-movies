import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import { getPopularMovies } from '../utils/moviesAPI';
import Loading from '../components/Loading/Loading';

export default class HomePage extends Component {
  state = {
    shows: [],
    loading: false,
    error: '',
  };

  propTypes = {
    location: T.shape.isRequired,
  };

  componentDidMount() {
    this.setState({ loading: true });

    getPopularMovies()
      .then(shows => this.setState({ shows }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { results } = this.state.shows;
    const { loading, error } = this.state;

    return (
      <>
        {error && <h1>Man, something wrong happened in fetching movies</h1>}
        {loading && <Loading />}
        {results && (
          <ul>
            {results.map(result => (
              <li key={result.id}>
                <Link
                  to={{
                    pathname: `movies/${result.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {result.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
