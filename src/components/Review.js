import React from 'react';
import PropTypes from 'prop-types';

function Review({ reviewsList }) {
  return (
    <div>
      {reviewsList.map(({ author, content, id }) => (
        <div key={id}>
          <h4>{author}</h4>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
}

Review.propTypes = {
  reviewsList: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Review;
