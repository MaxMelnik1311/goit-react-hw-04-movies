import React from 'react';
import PropTypes from 'prop-types';

function Cast({ filmCastList }) {
  const imgUrl = 'https://image.tmdb.org/t/p/w200/';

  return (
    <ul>
      {filmCastList.map(
        ({ cast_id, character, name, gender, profile_path }) => (
          <li key={cast_id}>
            <h5>{character}</h5>
            <h6>{name}</h6>
            <p>{gender === 1 ? 'female' : 'male'}</p>
            {profile_path ? (
              <img src={`${imgUrl}${profile_path}`} alt={name} />
            ) : (
              <img
                src="http://chto-takoe-lyubov.net/wp-content/uploads/2017/08/voprositelnyy-znak-stikhi.jpg"
                alt={name}
              />
            )}
          </li>
        ),
      )}
      ;
    </ul>
  );
}

Cast.propTypes = {
  filmCastList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cast;
