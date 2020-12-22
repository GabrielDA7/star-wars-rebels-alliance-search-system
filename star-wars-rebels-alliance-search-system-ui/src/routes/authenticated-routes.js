import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import NotFoundPage from '../pages/not-found-page';
import HomePage from '../pages/home-page';
import CardPage from '../pages/card-page';
import { SearchProvider } from '../contexts/search-context';

function AuthenticatedRoutes() {
  return (
    <Switch>
      <Route exact path="/login">
        <Redirect to="/" />
      </Route>
      <Route exact path="/">
        <SearchProvider>
          <HomePage />
        </SearchProvider>
      </Route>
      <Route exact path="/:type/:id">
        <CardPage />
      </Route>
      <Route exact path="/not-found">
        <NotFoundPage />
      </Route>
      <Route path="*">
        <Redirect to="/not-found" />
      </Route>
    </Switch>
  );
}

export default AuthenticatedRoutes;
