import React, { Component } from 'react';
import T from 'prop-types';

export default class InputForm extends Component {
  state = {
    query: '',
  };

  propTypes = {
    onSearch: T.func.isRequired,
  };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleQuerySubmit = e => {
    e.preventDefault();

    this.props.onSearch(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <form onSubmit={this.handleQuerySubmit}>
        <input onChange={this.handleChange} value={query} />
        <button type="submit">Click to find movies!</button>
      </form>
    );
  }
}
