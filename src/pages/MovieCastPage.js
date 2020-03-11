import React, { Component } from 'react';
import T from 'prop-types';
import { getMovieCast } from '../utils/moviesAPI';
import Cast from '../components/Cast';
import Loading from '../components/Loading/Loading';

class MovieCastPage extends Component {
  state = {
    filmCast: '',
    loading: false,
    error: '',
  };

  propTypes = {
    match: T.shape.isRequired,
  };

  componentDidMount() {
    this.setState({ loading: true });

    const { movieId } = this.props.match.params;
    getMovieCast(movieId)
      .then(cast => this.setState({ filmCast: cast }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { cast } = this.state.filmCast;
    const { error, loading } = this.state;

    return (
      <>
        {error && <h1>Man, something wrong happened in fetching cast</h1>}
        {loading && <Loading />}
        {cast && <Cast filmCastList={cast} />}
      </>
    );
  }
}

export default MovieCastPage;
