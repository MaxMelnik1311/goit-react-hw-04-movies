import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import SearchInput from '../components/SearchInput';
import { getMoviesByQuery } from '../utils/moviesAPI';
import queryParse from '../utils/queryStringParse';
import Loading from '../components/Loading/Loading';

export default class MoviesPage extends Component {
  state = {
    movieList: '',
    error: '',
    loading: false,
  };

  propTypes = {
    history: T.shape.isRequired,
    match: T.shape.isRequired,
    location: T.shape.isRequired,
  };

  componentDidMount() {
    this.setState({ loading: true });

    const { query } = queryParse(this.props.location.search);
    if (query !== null && query !== undefined) {
      getMoviesByQuery(query)
        .then(movieList => this.setState({ movieList }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = queryParse(this.props.location.search);
    const oldQuery = prevProps.location.search;
    const thisQuery = this.props.location.search;

    if (oldQuery !== thisQuery && thisQuery !== null) {
      getMoviesByQuery(query);
    }

    const { query: prevQuery } = queryParse(prevProps.location.search);
    const { query: nextQuery } = queryParse(this.props.location.search);

    if (prevQuery !== nextQuery) {
      getMoviesByQuery(nextQuery).then(movieList =>
        this.setState({ movieList }),
      );
    }
  }

  handleChangeQuery = query => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { results } = this.state.movieList;
    const { error, loading } = this.state;
    return (
      <>
        {error && <h1>Man, something wrong happened in fetching movies</h1>}
        {loading && <Loading />}
        <SearchInput onSearch={this.handleChangeQuery} />
        {results && (
          <ul>
            {results.map(result => (
              <li key={result.id}>
                <Link
                  to={{
                    pathname: `${this.props.match.url}/${result.id}`,
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
