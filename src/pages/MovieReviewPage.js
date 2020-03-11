import React, { Component } from 'react';
import T from 'prop-types';
import { getMovieReviews } from '../utils/moviesAPI';
import Rewiew from '../components/Review';
import Loading from '../components/Loading/Loading';

class MovieDetailsPageReview extends Component {
  state = {
    reviews: '',
    loading: false,
    error: '',
  };

  propTypes = {
    match: T.shape.isRequired,
  };

  componentDidMount() {
    this.setState({ loading: true });

    const { movieId } = this.props.match.params;
    getMovieReviews(movieId)
      .then(reviews => this.setState({ reviews }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { reviews, loading, error } = this.state;

    return (
      <>
        {error && <h1>Man, something wrong happened in fetching reviews</h1>}
        {loading && <Loading />}
        {reviews ? (
          <Rewiew results={reviews.results} />
        ) : (
          <p>Comments not found</p>
        )}
      </>
    );
  }
}

export default MovieDetailsPageReview;
