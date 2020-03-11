import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const Navigation = () => (
  <ul>
    <li>
      <NavLink
        className="Navigation-link"
        activeClassName="Navigation-link-active"
        to={routes.HomePage}
        exact
      >
        Home
      </NavLink>
    </li>

    <li>
      <NavLink
        className="Navigation-link"
        activeClassName="Navigation-link-active"
        to={routes.MoviesPage}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
