import React from 'react';
import PropTypes from 'prop-types';

function Rewiew({ results }) {
  return (
    <div>
      {results.map(({ author, content }) => (
        <div key={author}>
          <h4>{author}</h4>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
}

Rewiew.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Rewiew;
