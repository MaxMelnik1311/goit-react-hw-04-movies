import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Layout from './components/Layout';
import routes from './routes';

const App = () => (
  <Layout>
    <Switch>
      <Route path={routes.HomePage} exact component={HomePage} />
      <Route path={routes.MoviesPage} exact component={MoviesPage} />
      <Route path={routes.MovieDetailsPage} component={MovieDetailsPage} />
      <Redirect to={routes.HomePage} />
    </Switch>
  </Layout>
);

export default App;
